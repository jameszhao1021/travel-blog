const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countryContinentMapping = require('./countryContinentMapping');


const commentSchema = new Schema({
    text: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      userName: String
    }, {
        timestamps: true,
        
    });

const blogSchema = new Schema({
    continent:{
        type: String, 
    },
    country:{
        type: String, 
        required: true,
    },
    preview: {
        type: String,
    },
    title: {type: String, 
        required: true},
    text: {
        type: String, 
        required: true,
    },
    user: {type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
    },
    comments: [commentSchema],
    }, {
        timestamps: true,
        
    });

    blogSchema.pre('save', async function(next) {
        try {
            const mapping = await countryContinentMapping;

            // Check if the mapping is retrieved successfully
            console.log('See the whole map:', mapping);
            console.log('Current country:', this.country);
            // Lookup the continent for the selected country from the mapping
            console.log('see the whole map: '+countryContinentMapping);
            const continent = mapping[this.country];
            console.log('Found continent:', continent);
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
    
    module.exports = mongoose.model('Blog', blogSchema);