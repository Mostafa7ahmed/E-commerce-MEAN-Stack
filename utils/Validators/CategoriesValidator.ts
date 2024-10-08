
import { RequestHandler } from "express";
import { check } from "express-validator";
import categoriesModel from "../../Models/categoriesModel";
import validatorMiddleware from "../../Middlewares/ValidatorMiddleware";
export const createCategoryValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('category name required')
    .isLength({ min: 2, max: 50 }).withMessage('name length must be between 2 & 50')
    .custom(async (val: string) => {
      const category = await categoriesModel.findOne({ name: val });
      if (category) { throw new Error('category is already exist') };
      return true;
    }),
  validatorMiddleware
];

export const getCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('invalid mongo id'),
  validatorMiddleware
];

export const updateCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('invalid mongo id'),
  check('name').optional()
    .isLength({ min: 2, max: 50 }).withMessage('name length must be between 2 & 50'),
  validatorMiddleware
];

export const deleteCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('invalid mongo id'),
  validatorMiddleware
];
