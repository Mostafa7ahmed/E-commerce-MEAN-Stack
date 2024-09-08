import { Categories } from '../interfaces/categories';
import { Subcategories } from '../interfaces/subCategories';
import { Schema, model } from "mongoose";
const SubCategoriesShema :Schema = new Schema<Subcategories>({
    name: { type: "string", required: true,trim:true , unique: true },
    image: String,
    category: { type: Schema.Types.ObjectId, ref: "Categories"}
}, { timestamps: true })


SubCategoriesShema.pre<Categories>(/^find/, function (next) {
    this.populate({path: "category" , select: "name" });
    next()  
})

export default model<Subcategories>("subCategories", SubCategoriesShema);