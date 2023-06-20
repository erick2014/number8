//import {Model} from '../models/shopModel.js'
const Shop = {
  findAll: ({}) => {},
  create: ()=>({
    name: string,
    address: string,
    telephone: string,
  })
};

class ShopController {
  async getShops() {
    return Shop.findAll({ raw: true });
  }

  async newShop({
    name,
    address,
    telephone,
  }) {
    try {
      const shop = await Shop.create({
        name,
        address,
        telephone,
      });
      return shop;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ShopController;
