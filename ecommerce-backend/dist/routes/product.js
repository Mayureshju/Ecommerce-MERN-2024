import express from "express";
import { deleteProduct, getAdminProducts, getAllCategories, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
router.post('/new', singleUpload, newProduct);
router.get('/latest', getlatestProducts);
router.get('/categories', getAllCategories);
router.get('/admin-products', getAdminProducts);
router
    .route("/:id")
    .get(getSingleProduct)
    .put(singleUpload, updateProduct)
    .delete(deleteProduct);
export default router;
