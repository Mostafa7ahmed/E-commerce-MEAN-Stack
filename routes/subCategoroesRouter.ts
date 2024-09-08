import { Router } from 'express';
import { updateSubCategorie, getAllSubCategories, createSubCategorie , GetSubCategorie  , deleteSubCategorie, filterSubcategories} from '../Controllers/Subcategories';
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from '../utils/Validators/subcategoriesvalidtor';


const SubcategorieRouter: Router = Router({mergeParams :true});
SubcategorieRouter.route('/')
    .get(filterSubcategories ,getAllSubCategories)
    .post(createSubcategoryValidator ,createSubCategorie)

    SubcategorieRouter.route('/:id')
    .get(getSubcategoryValidator,GetSubCategorie)
    .put(updateSubcategoryValidator,updateSubCategorie)
    .delete(deleteSubcategoryValidator,deleteSubCategorie)
     
     





export default SubcategorieRouter