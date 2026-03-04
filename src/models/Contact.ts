import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your full name"],
        },
        email: {
            type: String,
            required: [true, "Please provide your email address"],
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        },
        phone: {
            type: String,
            required: [true, "Please provide your contact number"],
        },
        company: {
            type: String,
        },
        service: {
            type: String,
            required: [true, "Please select a service"],
        },
        message: {
            type: String,
            required: [true, "Please provide project details"],
        },
    },
    { timestamps: true, collection: "contact" }
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
