import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: false },
  country: { type: String, required: true },
  city: { type: String, required: true },
});

memberSchema.virtual('daysUntilBirthday').get(function () {
  const today = new Date();
  const birthDate = new Date(this.birthDate);

  birthDate.setFullYear(today.getFullYear());

  if (birthDate < today) {
    birthDate.setFullYear(today.getFullYear() + 1);
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const daysUntilBirthday = Math.round((birthDate - today) / oneDay);

  return daysUntilBirthday;
});

const memberModel = mongoose.model('member', memberSchema);

export default memberModel;