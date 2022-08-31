const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

mongoose
    .connect(process.env.dbPath,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

const contact = new mongoose.model("contact", contactSchema);

const messageSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true,
    },
    timeDate: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    },
});

const message = new mongoose.model("message", messageSchema);

module.exports = {
    contact,
    message,
};
