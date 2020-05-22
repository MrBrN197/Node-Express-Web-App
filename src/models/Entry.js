const { Schema, model } = require('mongoose');

let entrySchema = new Schema({
    title: {
        type: String,
        required: true
    }
//   author: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
});

let Entry = model('Blog', entrySchema);

module.exports = { Entry };