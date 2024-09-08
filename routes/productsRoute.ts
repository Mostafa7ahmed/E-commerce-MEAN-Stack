import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, resizeProductImages, updateProduct, uploadProductImages } from '../Controllers/products';
import { createProductValidator, deleteProductValidator, getProductValidator, updateProductValidator } from '../utils/Validators/productsValidator';

const productsRoute: Router = Router()
productsRoute.route('/')
  .get(getAllProducts)
  .post(uploadProductImages, resizeProductImages, createProductValidator, createProduct);

productsRoute.route('/:id')
  .get(getProductValidator, getProduct)
  .put(updateProductValidator, updateProduct)
  .delete(deleteProductValidator, deleteProduct);

export default productsRoute;