import {Shop} from '../models/shopModel.js'

class ShopController{

  async getShops(){
    const allShops = await Shop.findAll({})
    const parsedShops = allShops.map(shop=>shop)
    return parsedShops
  }

  async newShop({name,address,telephone}){
    try {
      const shop = await Shop.create({
        name,
        address,
        telephone,
      })
      return shop
    } catch (error) {
      throw error
    }
  }

}

export default ShopController