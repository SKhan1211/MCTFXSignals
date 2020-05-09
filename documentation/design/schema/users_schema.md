`users`
|column name|data type|details|
|-|-|-|
|`id`|integer|not null, primary key|
|`email`|string|not null, indexed, unique|
|`username`|string|not null, indexed, unique|
|`password_digest`|string|not null|
|`session_token`|string|not null, indexed, unique|
|`first_name`|string|not null|
|`last_name`|string|not null|
|`is_verified`|boolean|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|
* index on `username, unique: true`
* index on `session_token, unique: true`
* index on `email, unique: true`