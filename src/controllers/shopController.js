import {Shop} from '../models/shopModel.js'

class ShopController{

  async getShops(){
    const allShops = await Shop.findAll({})
    const parsedShops = allShops.map(shop=>shop)
    return parsedShops
  }

  async newShop(req,res){
    try {
      res.send('new shop added')
      next()
    } catch (error) {
      throw error
    }
  }

}

export default ShopController