const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    color: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);