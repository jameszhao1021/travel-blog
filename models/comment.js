const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    text: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, required: true},
    }, {
        timestamps: true,
        
    });

    module.exports = mongoose.model('comment', commentSchema);