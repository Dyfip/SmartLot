const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    isBooked: { type: Boolean, default: false },
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Slot", slotSchema);
