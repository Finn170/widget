const pensionAge = 67;
const occupationFactorMapping = {
  fe: 0.001,
  be: 0.0015,
  gd: 0.002,
  vd: 0.0025,
};

/**
 * Get the factor based on choosen occupation
 * @param {String} occupation
 * @returns {Number} occupationFactor
 */
const getOccupationFactor = (occupation) => {
  return occupationFactorMapping[occupation];
};

/**
 * Get amount of years till the pension age
 * @param {Number} age
 * @returns {Number} amount of years till pension
 */
const getYearsTillPension = (age) => {
  return pensionAge - age;
};

// Calculate the gross and net premium
// The premium amounts are rounded to the largest integer less than or equal to a given number

export const calculatePremium = (data) => {
  let yearlyGrossPremium = data.yearlyIncome * getYearsTillPension(data.age) * getOccupationFactor(data.occupation);
  let yearlyNetPremium = yearlyGrossPremium / 1.21;
  return {
    grossPremium: Math.round(yearlyGrossPremium / 12),
    netPremium: Math.round(yearlyNetPremium / 12),
  };
};
