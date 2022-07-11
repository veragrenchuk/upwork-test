import moment, { Moment } from "moment";

export const dateParser = (date: string): Moment => {
  return moment(date, "DD/MM/YYYY");
};
