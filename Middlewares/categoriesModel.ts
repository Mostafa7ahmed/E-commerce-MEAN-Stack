import { Schema, model } from "mongoose";
import { Categories } from "../interfaces/categories";
const CategoriesShema :Schema = new Schema<Categories>({
    name: { type: "string", required: true,trim:true , unique: true },
    image :String,
}, { timestamps: true })

export default model<Categories>("Categories", CategoriesShema);