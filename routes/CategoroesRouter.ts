import { Router } from 'express';
import { getAllCategory } from '../Controllers/Categories';


const CategoriesRouter: Router = Router();
CategoriesRouter.route('/')
    .get(getAllCategory)




    
export default CategoriesRouter