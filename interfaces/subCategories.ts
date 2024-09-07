import { Document } from "mongoose";
import { Categories } from "./categories";

export interface Subcategories extends Document {
  name: string;
  image: string;
  category: Categories
}