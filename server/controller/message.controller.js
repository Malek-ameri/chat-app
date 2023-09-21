const { asyncHandler } = require('../utils/asyncHandler');
const Messages = require("../model/message.model")


const getAllMessage = asyncHandler(async (req, res, next) => {
    const { from, to } = req.body;

    const messages = await Messages.find({
        users: {
            $all: [from, to],
        },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
        return {
            id:msg._id,
            fromSelf: msg.sender.toString() === from,
            message: msg.message.text,
        };
    });

    res.json(projectedMessages);
});

const addMessage = asyncHandler(async (req, res, next) => {
    const { from, to, message } = req.body;
    const data = await Messages.create({
        message: { text: message },
        users: [from, to],
        sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
});

module.exports = {
    addMessage,
    getAllMessage
}