import 'whatwg-fetch'
// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function client(endpoint, { body, ...customConfig } = {}) {
  const authToken = localStorage.getItem('token')
  const csrf = getCsrf()
  const headers = {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrf,
    'Authorization': `Bearer ${authToken}`,
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

const getCsrf = () => {
  const csrfQuery = document.querySelector("meta[name='csrf-token']")

  if (csrfQuery !== null) {
    return csrfQuery.getAttribute("content");
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body })
}
