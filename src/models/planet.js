import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true },
        style: { type: String, required: true }
    },
    {
        timestamps: true
    }
)