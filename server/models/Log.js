const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const endingLetterGroup = require('../utils/endingLetterGroup');
const newStartingLetterGroup = require('../utils/newStartingLetterGroup');
const NextResidualNitrogenTime = require('../utils/NextResidualNitrogenTime');
const NextMaxDiveTime = require('../utils/NewMaxDiveTime');

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
    type: Number,
  },

  startPressure: {
    type: Number
  },

  endPressure: {
    type: Number
  },

  ballast: {
    type: String
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

  nextDepth: {
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
  return this.startPressure - this.endPressure || 0;
});
//surface air consumption
logSchema.virtual('SAC').get(function () {
  const PSIperMin = this.pressureUsed / this.actualDiveTime;
  return PSIperMin / this.pressureAtDepth || 0;
});
//absolute pressure at depth
logSchema.virtual('pressureAtDepth').get(function () {
  const depthPressure = this.maxDepth / 33;
  return depthPressure + 1 || 0;
});
//Ending Letter Group
logSchema.virtual('EndingLetterGroup').get(function () {
  const TNT = this.TotalNitrogenTime;
  const depth = this.maxDepth;

  return endingLetterGroup(depth, TNT) || "No Letter Group";
});
//Total Nitrogen Time
logSchema.virtual('TotalNitrogenTime').get(function () {
  return this.actualDiveTime + this.residualNitrogenTime || 0;
});
//create function to output residualNitrogenTime programatically
logSchema.virtual('NextResidualNitrogenTime').get(function (){
  const NLG = this.NewStartingLetterGroup;
  const nextDepth = this.nextDepth || 0;

  return NextResidualNitrogenTime(NLG, nextDepth) || 0;
})
//Next Starting Letter Group
//require SI in Minutes?
logSchema.virtual('NewStartingLetterGroup').get(function () {
  const ELG = this.EndingLetterGroup;
  const SI = this.nextSurfaceInt;

  return newStartingLetterGroup(ELG, SI) || "No Letter Group";
})
logSchema.virtual('NextMaxDiveTime').get(function (){
  const NLG = this.NewStartingLetterGroup;
  const nextDepth = this.nextDepth || 0;

  return NextMaxDiveTime(NLG, nextDepth) || 0;
})



// const Log = model('Log', logSchema);

module.exports = logSchema;
