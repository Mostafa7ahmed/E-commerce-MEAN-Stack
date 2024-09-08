
import * as all from '../interfaces'
import { Application, NextFunction, Request, Response } from "express";
import CategoriesRouter from './CategoroesRouter';
import SubcategorieRouter from './subCategoroesRouter';
import globalErrors from '../Middlewares/globalError';
import ApiErrors from '../utils/apiError';

const mountRoutes = (app: Application) => {
  app.use('/api/v1/categories', CategoriesRouter)
  app.use('/api/v1/subcategories', SubcategorieRouter)
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    return next(new ApiErrors(`the route ${req.originalUrl} not found`, 400))
  })
  app.use(globalErrors);
}

export default mountRoutes;