'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','InvoiceController.index').as('index')
Route.get('/register','AuthController.registrationView').as('register.create')
Route.post('/register-store','AuthController.postRegister').as('register.store').validator('Register')
Route.get('/login','AuthController.loginView').as('login.create')
Route.post('/login-store','AuthController.postLogin').as('login.store')
Route.get('/view-invoice/:id','InvoiceController.show').as('view.invoice')

Route.group(() => {
    Route.get('/create-invoice','InvoiceController.create').as('create.invoice')
    Route.post('/store-invoice','InvoiceController.store').as('store.invoice')
    Route.get('/edit-invoice/:id','InvoiceController.edit').as('edit.invoice')
    Route.post('/update-invoice/:id','InvoiceController.update').as('update.invoice')
    Route.get('/delete-invoice/:id','InvoiceController.destroy').as('delete.invoice')
    Route.post('/logout','AuthController.logout').as('logout')
}).middleware(['auth'])