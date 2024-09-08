import { NextFunction, Request, Response } from "express";
import categoriesModel from "../Models/categoriesModel";
import { Categories } from "../interfaces/categories";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandling";

export const getAllCategory = getAll<Categories>(categoriesModel, 'categories');


export const createCategory =  createOne<Categories>(categoriesModel);

export const GetCategory = getOne<Categories>(categoriesModel);


export const updateCategory = updateOne<Categories>(categoriesModel);



export const deleteCategory =  deleteOne<Categories>(categoriesModel);









