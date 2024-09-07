import { NextFunction, Request, Response } from "express";
import categoriesModel from "../Middlewares/categoriesModel";
import { Categories } from "../interfaces/categories";
import asyncHandler from "express-async-handler";

export const getAllCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const categories:Categories[] = await categoriesModel.find();
    res.status(200).json({ data: categories });
});




