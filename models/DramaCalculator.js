const mongoose = require('mongoose');
const { Schema } = mongoose;

const DramaCalculatorSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  numberOfPeopleQ1: {
    type: String,
  },
  salaryObjectQ2: {
    type: Object,
  },
  salaryObjInHourlyRate: {
    type: Object,
  },
  sumOfPeopleSalary: {
    type: String,
  },
  avgPeopleSalary: {
    type: String,
  },
  dramaDurationQ3: {
    type: String,
  },
  totalSalaryInHourlyRate: {
    type: String,
  },
  dramaRatingQ4: {
    type: String,
  },
  externalInterventionsQ5: {
    type: String,
  },
  dramaRoleChangesQ6: {
    type: String,
  },
  departedCostFI: {
    type: String,
  },
  costIncurredFI: {
    type: String,
  },
  ongoingCostFI: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DramaCalculator', DramaCalculatorSchema);
