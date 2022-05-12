import momentTz from "moment";
import "moment-timezone";

let setTz = (tz: string) => {
  momentTz.tz.setDefault(tz);
};

let getTz = () => {
  return momentTz().tz();
}

let now = () => {
  let date = new Date();
  return momentTz(date);
};

let momentWithTimestampMS = (timestamp: number) => {
  return momentTz(timestamp);
};

let format = (moment: moment.Moment, format: string) => {
  return moment.format(format);
};

let momentWithDate = (date: Date, format: string) => {
  return momentTz(date, format);
};

let toJsDate = (m: moment.Moment) => {
  return m.toDate();
};

let momentWithFormat = (dateString: string, format: string) => {
  return momentTz(dateString, format);
};

let isBefore = (moment_1: moment.Moment, moment_2: moment.Moment) => {
  return moment_1.isBefore(moment_2);
};

let isAfter = (moment_1: moment.Moment, moment_2: moment.Moment) => {
  return moment_1.isAfter(moment_2);
};

let getDateTimeAfterElapsedTime = (
  elapsed_time: number,
  time_unit: any,
  initial_date: moment.Moment
) => {
  let toDuration = momentTz.duration(elapsed_time, time_unit);
  return initial_date.add(toDuration);
};

let getDateTimeBeforeElapsedTime = (
  elapsed_time: number,
  time_unit: any,
  initial_date: moment.Moment
) => {
  let toDuration = momentTz.duration(elapsed_time, time_unit);
  return initial_date.subtract(toDuration);
};

let startOf = (moment: moment.Moment, scale: any) => {
  return moment.startOf(scale);
};

let endOf = (moment: moment.Moment, scale: any) => {

  return moment.endOf(scale);
};

let valueOf = (moment: moment.Moment) => {
  return moment.valueOf();
};

const setOtherZone = (date: Date, timezone: string) => {
  const dateWithoutZone = momentTz(date).format("YYYY-MM-DDTHH:mm:ss.SSS")
  const otherZone = momentTz.tz(date, timezone).format("Z")
  const dateWithOtherZone = [dateWithoutZone, otherZone].join("")
  /* console.log(dateWithoutZone, otherZone, dateWithOtherZone) */
  console.log(momentTz(dateWithOtherZone).zone(otherZone))

  return new Date(dateWithOtherZone)
};


export {
  setTz,
  now,
  momentWithTimestampMS,
  format,
  momentWithDate,
  toJsDate,
  momentWithFormat,
  isBefore,
  isAfter,
  getDateTimeAfterElapsedTime,
  getDateTimeBeforeElapsedTime,
  startOf,
  endOf,
  valueOf,
  getTz,
  setOtherZone,
};
