import { Subcategories } from './../interfaces/subCategories';
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandling";
import subCategoriesModuls from "../Models/subCategoriesModuls";
import { NextFunction, Request, Response } from 'express';
import { FilterData } from '../interfaces/filterData';



export const filterSubcategories = (req: Request, res: Response, next: NextFunction) => {
    let filterData :FilterData= {};
    if (req.params.categoryId) {
      filterData.category = req.params.categoryId;
    }

    req.filterData = filterData;
    next();

  }

export const getAllSubCategories = getAll<Subcategories>(subCategoriesModuls, 'categories');



export const createSubCategorie =  createOne<Subcategories>(subCategoriesModuls);


export const GetSubCategorie = getOne<Subcategories>(subCategoriesModuls);


export const updateSubCategorie = updateOne<Subcategories>(subCategoriesModuls);



export const deleteSubCategorie =  deleteOne<Subcategories>(subCategoriesModuls);









