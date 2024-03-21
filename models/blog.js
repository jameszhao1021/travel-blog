const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    }, {
        timestamps: true,
        
    });

    module.exports = mongoose.model('Blog', blogSchema);