import { DataTypes } from "sequelize"
const {INTEGER,STRING} = DataTypes

import { getInstance } from '../../dbs/setup.js'
const sequelize = getInstance()

const Shop = sequelize.define('Shop',{
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  telephone: {
    type: STRING,
    allowNull: false,
  }
})

export default Shop