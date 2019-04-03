### Laravel
t PHP objects are different from SQL data. Migrations are how we translate our object's structure to something intelligible to the database.
 a migration is simply a way to tell the database that we're updating it with a new model.the two go hand in hand: When we create or update a model, we must create a migration.
 a migration is just a class with two methods: up and down.
  up method is called when we upgrade our database, and down is used when we revert to an older version of it.

php artisan tinker allows them to run PHP with all the tools Laravel provides. So, they can "tinker" with the framework directly.
php artisan make:seeder UsersTableSeeder
php artisan db:seed
Refresh your migrations and seed your users again.

php artisan migrate:refresh --seed

php artisan tinker
App\User::find(1)

Scaffold a Users resource controller: php artisan make:controller UsersController --resource

php artisan route:list

php artisan make:controller UsersController --resource

https://laravel.com/docs/5.1/eloquent-relationships
https://laravel.com/docs/5.2/queries
