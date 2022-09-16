const { Schema, model } = require("mongoose");

const S3ObjectSchema = new Schema({
  bucket: {
    type: String,
    required: true,
    trim: true,
  },
  region: {
    type: String,
    required: true,
    trim: true,
  },
  key: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = S3ObjectSchema;


