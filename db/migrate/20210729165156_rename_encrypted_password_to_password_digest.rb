class RenameEncryptedPasswordToPasswordDigest < ActiveRecord::Migration[6.1]
  def change
    # Follows Bcrypt requirements for has_secure_password
    rename_column :users, :encrypted_password, :password_digest
  end
end
