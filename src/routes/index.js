const {Router} = require('express') 
const shopRoutes = require('./shop.js') 

const mainRouter = Router()
mainRouter.use('/shop',shopRoutes)

module.exports= mainRouter