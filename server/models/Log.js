const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const endingLetterGroup = require('../utils/endingLetterGroup');
const newStartingLetterGroup = require('../utils/newStartingLetterGroup');

const logSchema = new Schema({

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  diveNumber: {
    type: Number,
  },

  location: {
    type: String
  },

  dateTime: {
    type: String
  },

  breathingMixture: {
    type: String
  },

  tankType: {
    type: String
  },

  tankCapacity: {
    type: Number
  },

  startPressure: {
    type: Number
  },

  endPressure: {
    type: Number
  },

  ballast: {
    type: Number
  },

  extraEquipment: {
    type: String
  },

  suit: {
    type: String
  },

  weatherCond: {
    type: String
  },

  airTemp: {
    type: Number
  },

  waterType: {
    type: String
  },

  underwaterVisibility: {
    type: Number
  },

  waterTemp: {
    type: Number
  },

  waterCond: {
    type: String
  },

  surfaceInt: {
    type: Number
  },

  nextSurfaceInt: {
    type: Number
  },

  previousEndLetter: {
    type: String
  },

  maxDepth: {
    type: Number
  },

  residualNitrogenTime: {
    type: Number
  },

  actualDiveTime: {
    type: Number
  },


},
  {
    toJSON: {
      virtuals: true,
    },
  });
//pressure used
logSchema.virtual('pressureUsed').get(function () {
  return this.startPressure - this.endPressure;
});
//surface air consumption
logSchema.virtual('SAC').get(function () {
  const PSIperMin = this.pressureUsed;
  return PSIperMin / this.pressureAtDepth;
});
//absolute pressure at depth
logSchema.virtual('pressureAtDepth').get(function () {
  const depthPressure = this.maxDepth / 33;
  return depthPressure + 1;
});
//Ending Letter Group
logSchema.virtual('EndingLetterGroup').get(function () {
  const TNT = this.TotalNitrogenTime;
  const depth = this.maxDepth;

  return endingLetterGroup(depth, TNT);
});
//Total Nitrogen Time
logSchema.virtual('TotalNitrogenTime').get(function () {
  return this.actualDiveTime + this.residialNitrogenTime;
});
//create function to output residualNitrogenTime programatically

//Next Starting Letter Group
//require SI in Minutes?
logSchema.virtual('NewStartingLetterGroup').get(function () {
  const ELG = this.EndingLetterGroup;
  const SI = this.nextSurfaceInt;

  return newStartingLetterGroup(ELG, SI);
})



// const Log = model('Log', logSchema);

module.exports = logSchema;
