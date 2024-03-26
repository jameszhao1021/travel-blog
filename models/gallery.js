const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countryContinentMapping = require('./countryContinentMapping');

const gallerySchema = new Schema({
    continent:{
        type: String  
    },
    country:{
        type: String, 
        required: true,
    },
    preview: {
        type: String,
    },
    text: {type: String, 
        required: true},
    user: {type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
    }
    }, {
        timestamps: true
});

gallerySchema.pre('save', async function(next) {
    try {
        // Lookup the continent for the selected country from the mapping
        const mapping = await countryContinentMapping;
        const continent = mapping[this.country];
        if (!continent) {
            throw new Error('Continent not found for the selected country');
        }
        // Set the continent field in the document
        this.continent = continent;
        next();
    } catch (error) {
        next(error);
    }
});


module.exports = mongoose.model('Gallery', gallerySchema);