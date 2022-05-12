import momentTz from "moment";
import "moment-timezone";
declare let setTz: (tz: string) => void;
declare let getTz: () => string | undefined;
declare let now: () => momentTz.Moment;
declare let momentWithTimestampMS: (timestamp: number) => momentTz.Moment;
declare let format: (moment: momentTz.Moment, format: string) => string;
declare let momentWithDate: (date: Date, format: string) => momentTz.Moment;
declare let toJsDate: (m: moment.Moment) => Date;
declare let momentWithFormat: (dateString: string, format: string) => momentTz.Moment;
declare let isBefore: (moment_1: moment.Moment, moment_2: moment.Moment) => boolean;
declare let isAfter: (moment_1: moment.Moment, moment_2: moment.Moment) => boolean;
declare let getDateTimeAfterElapsedTime: (elapsed_time: number, time_unit: any, initial_date: moment.Moment) => momentTz.Moment;
declare let getDateTimeBeforeElapsedTime: (elapsed_time: number, time_unit: any, initial_date: moment.Moment) => momentTz.Moment;
declare let startOf: (moment: momentTz.Moment, scale: any) => momentTz.Moment;
declare let endOf: (moment: momentTz.Moment, scale: any) => momentTz.Moment;
declare let valueOf: (moment: momentTz.Moment) => number;
declare const setOtherZone: (date: Date, timezone: string) => Date;
export { setTz, now, momentWithTimestampMS, format, momentWithDate, toJsDate, momentWithFormat, isBefore, isAfter, getDateTimeAfterElapsedTime, getDateTimeBeforeElapsedTime, startOf, endOf, valueOf, getTz, setOtherZone, };
