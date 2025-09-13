const Slot = require("../models/Slot");

exports.getSlots = async (req, res) => {
    try {
    const slots = await Slot.find();
    res.json(slots);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

exports.bookSlot = async (req, res) => {
    try {
    const { slotId, userId } = req.body;
    const slot = await Slot.findById(slotId);
    if (!slot) return res.status(404).json({ error: "Slot not found" });
    if (slot.isBooked) return res.status(400).json({ error: "Slot already booked" });

    slot.isBooked = true;
    slot.bookedBy = userId;
    await slot.save();

    res.json({ message: "Slot booked successfully", slot });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};
