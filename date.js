import moment from "moment";

export const getAge = (birthday) => {
  return moment().diff(moment(birthday, "DD-MM-YYYY", true), "years");
};
