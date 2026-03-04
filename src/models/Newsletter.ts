import mongoose, { Schema, model, models } from "mongoose";

const NewsletterSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Please provide your email address"],
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        },
    },
    { timestamps: true, collection: "newsletter" }
);

const Newsletter = models.Newsletter || model("Newsletter", NewsletterSchema);

export default Newsletter;
