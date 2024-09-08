import { Router } from 'express';
import { createCategory, getAllCategory, GetCategory , updateCategory  , deleteCategory} from '../Controllers/Categories';
import SubcategorieRouter from './subCategoroesRouter';
import { createCategoryValidator, deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from '../utils/Validators/CategoriesValidator';


const CategoriesRouter: Router = Router();
CategoriesRouter.use('/:categoryId/subcategories',SubcategorieRouter)
CategoriesRouter.route('/')
    .get(getAllCategory)
    .post(createCategoryValidator,createCategory)

CategoriesRouter.route('/:id')
    .get(getCategoryValidator,GetCategory)
    .put(updateCategoryValidator,updateCategory)
    .delete(deleteCategoryValidator,deleteCategory)
     
     





export default CategoriesRouter