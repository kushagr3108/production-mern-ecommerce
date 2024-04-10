import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import ExpressFormidable from "express-formidable";


const router = express.Router()

//routes

//create products
router.post('/create-product', requireSignIn, ExpressFormidable(), isAdmin, createProductController)

//update products
router.put('/update-product/:pid', requireSignIn, ExpressFormidable(), isAdmin, updateProductController)

//get products
router.get("/get-product", getProductController)

//get single product
router.get("/get-product/:slug", getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController)

//delete produc
router.delete("/delete-product/:pid", deleteProductController)

//Filter product
router.post("/product-filters", productFiltersController)

//product count
router.get("/product-count", productCountController)

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar products
router.get('/related-product/:pid/:cid', relatedProductController);

//get category-wise prod
router.get("/product-category/:slug", productCategoryController)

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


export default router;