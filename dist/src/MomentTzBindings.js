"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOtherZone = exports.getTz = exports.valueOf = exports.endOf = exports.startOf = exports.getDateTimeBeforeElapsedTime = exports.getDateTimeAfterElapsedTime = exports.isAfter = exports.isBefore = exports.momentWithFormat = exports.toJsDate = exports.momentWithDate = exports.format = exports.momentWithTimestampMS = exports.now = exports.setTz = void 0;
const moment_3 = __importDefault(require("moment"));
require("moment-timezone");
let setTz = (tz) => {
    moment_3.default.tz.setDefault(tz);
};
exports.setTz = setTz;
let getTz = () => {
    return (0, moment_3.default)().tz();
};
exports.getTz = getTz;
let now = () => {
    let date = new Date();
    return (0, moment_3.default)(date);
};
exports.now = now;
let momentWithTimestampMS = (timestamp) => {
    return (0, moment_3.default)(timestamp);
};
exports.momentWithTimestampMS = momentWithTimestampMS;
let format = (moment, format) => {
    return moment.format(format);
};
exports.format = format;
let momentWithDate = (date, format) => {
    return (0, moment_3.default)(date, format);
};
exports.momentWithDate = momentWithDate;
let toJsDate = (m) => {
    return m.toDate();
};
exports.toJsDate = toJsDate;
let momentWithFormat = (dateString, format) => {
    return (0, moment_3.default)(dateString, format);
};
exports.momentWithFormat = momentWithFormat;
let isBefore = (moment_1, moment_2) => {
    return moment_1.isBefore(moment_2);
};
exports.isBefore = isBefore;
let isAfter = (moment_1, moment_2) => {
    return moment_1.isAfter(moment_2);
};
exports.isAfter = isAfter;
let getDateTimeAfterElapsedTime = (elapsed_time, time_unit, initial_date) => {
    let toDuration = moment_3.default.duration(elapsed_time, time_unit);
    return initial_date.add(toDuration);
};
exports.getDateTimeAfterElapsedTime = getDateTimeAfterElapsedTime;
let getDateTimeBeforeElapsedTime = (elapsed_time, time_unit, initial_date) => {
    let toDuration = moment_3.default.duration(elapsed_time, time_unit);
    return initial_date.subtract(toDuration);
};
exports.getDateTimeBeforeElapsedTime = getDateTimeBeforeElapsedTime;
let startOf = (moment, scale) => {
    return moment.startOf(scale);
};
exports.startOf = startOf;
let endOf = (moment, scale) => {
    return moment.endOf(scale);
};
exports.endOf = endOf;
let valueOf = (moment) => {
    return moment.valueOf();
};
exports.valueOf = valueOf;
const setOtherZone = (date, timezone) => {
    const dateWithoutZone = (0, moment_3.default)(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
    const otherZone = moment_3.default.tz(date, timezone).format("Z");
    const dateWithOtherZone = [dateWithoutZone, otherZone].join("");
    /* console.log(dateWithoutZone, otherZone, dateWithOtherZone) */
    console.log((0, moment_3.default)(dateWithOtherZone).zone(otherZone));
    return new Date(dateWithOtherZone);
};
exports.setOtherZone = setOtherZone;
