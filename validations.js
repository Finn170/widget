import moment from "moment";
import { getAge } from "./date";

/**
 * Validate on date format
 * @param {*} pristine
 */
const dateFormatValidation = (pristine) => {
  pristine.addValidator(
    "date-format",
    (value) => {
      const regex_date = /^\d{1,2}\-\d{1,2}\-\d{4}$/;

      if (!regex_date.test(value)) {
        return false;
      }

      return true;
    },
    "The date (${0}) must have the format dd-mm-yyyy"
  );
};

/**
 * Is the date a valid date
 * @param {*} pristine
 */
const isValidDate = (pristine) => {
  pristine.addValidator(
    "date-is-valid",
    (value) => moment(value, "DD-MM-YYYY", true).isValid(),
    "The date (${0}) isn't a valid date"
  );
};

/**
 * Is the age higher or equal to 18
 * Is the age lower or equal to 67
 * @param {*} pristine
 */
const ageBetween18and67 = (pristine) => {
  pristine.addValidator(
    "age-between-18-67",
    (value) => {
      const age = getAge(value);

      console.log(age);
    },
    "Your age should be between 18 and 67"
  );
};

/**
 * Create custom validations
 * @param {*} pristine
 */
export const createCustomValidation = (pristine) => {
  dateFormatValidation(pristine);
  isValidDate(pristine);
  ageBetween18and67(pristine);
};
