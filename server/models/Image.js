const { Schema, model } = require('mongoose');

const imageSchema = new Schema ({
    name: {
        type: String
    },
    description: {
        type: String
    },
    link : {
        type: String
    },
    aws_key: {
        type: String,
    },
    // item_id: {
    //     type: Number,
    //     references: {
    //         model: "items",
    //         key: "id",
    //     },
    // },
});

const Image = model('Image', imageSchema);

module.exports = Image;
