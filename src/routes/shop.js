import { Router } from "express";
import ShopController from '../controllers/shopController.js'

const router = Router()
const shopController = new ShopController()

router.get('/shop', async(req,res,next)=>{
  try {
    const response = await shopController.getShops()
    res.json(response)
    
  } catch (error) {
    next(error)
  }
})
router.post('/shop',shopController.newShop)

export default router