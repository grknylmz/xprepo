import { Schema, Model, model, Document } from 'mongoose';

export interface ICategories extends Document {
    categories: string;
}

export var CategoriesSchema: Schema = new Schema({
    categories: {
        type: Schema.Types.String,
        required: true
    }
});

export const Categories: Model<ICategories> = model<ICategories>('Categories', CategoriesSchema);