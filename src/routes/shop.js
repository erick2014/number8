const { Router } = require("express");
const ShopController = require("../controllers/shopController");
const controller = new ShopController();
const router = Router();

router.get("/", async (_, res, next) => {
  try {
    const response = await controller.getShops();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const response = await controller.newShop(body);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
