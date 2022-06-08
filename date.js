import moment from "moment";

/**
 * Get the age based on the inputted date
 * @param {*} birthday
 * @returns
 */
export const getAge = (birthday) => {
  return moment().diff(moment(birthday, "DD-MM-YYYY", true), "years");
};
