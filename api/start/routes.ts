/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
	return { hello: 'world' }
})
Route.group(() => {
	Route.resource('users', 'UsersController').apiOnly()
	Route.resource('categories', 'CategoriesController').apiOnly()
	Route.resource('products', 'ProductsController').apiOnly()
	Route.resource('discounts', 'DiscountsController').apiOnly()
	Route.post('authentication/login', 'AuthController.login')
	Route.get('authentication/logout', 'AuthController.logout')
	Route.get('authentication/islogin', 'AuthController.isLogin').middleware('auth')
	Route.get('authentication/confirmation_token/:token', 'UsersController.confirmAccount')
	Route.group(() => {
		Route.post('/', 'CookiesController.allow')
		Route.get('/:ip', 'CookiesController.show')
	}).prefix('/cookie')
}).prefix('/api')
