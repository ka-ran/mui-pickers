"use strict";
exports.__esModule = true;
exports.setOtherZone = exports.getTz = exports.valueOf = exports.endOf = exports.startOf = exports.getDateTimeBeforeElapsedTime = exports.getDateTimeAfterElapsedTime = exports.isAfter = exports.isBefore = exports.momentWithFormat = exports.toJsDate = exports.momentWithDate = exports.format = exports.momentWithTimestampMS = exports.now = exports.setTz = void 0;
var moment_3 = require("moment");
require("moment-timezone");
var setTz = function (tz) {
    moment_3["default"].tz.setDefault(tz);
};
exports.setTz = setTz;
var getTz = function () {
    return (0, moment_3["default"])().tz();
};
exports.getTz = getTz;
var now = function () {
    var date = new Date();
    return (0, moment_3["default"])(date);
};
exports.now = now;
var momentWithTimestampMS = function (timestamp) {
    return (0, moment_3["default"])(timestamp);
};
exports.momentWithTimestampMS = momentWithTimestampMS;
var format = function (moment, format) {
    return moment.format(format);
};
exports.format = format;
var momentWithDate = function (date, format) {
    return (0, moment_3["default"])(date, format);
};
exports.momentWithDate = momentWithDate;
var toJsDate = function (m) {
    return m.toDate();
};
exports.toJsDate = toJsDate;
var momentWithFormat = function (dateString, format) {
    return (0, moment_3["default"])(dateString, format);
};
exports.momentWithFormat = momentWithFormat;
var isBefore = function (moment_1, moment_2) {
    return moment_1.isBefore(moment_2);
};
exports.isBefore = isBefore;
var isAfter = function (moment_1, moment_2) {
    return moment_1.isAfter(moment_2);
};
exports.isAfter = isAfter;
var getDateTimeAfterElapsedTime = function (elapsed_time, time_unit, initial_date) {
    var toDuration = moment_3["default"].duration(elapsed_time, time_unit);
    return initial_date.add(toDuration);
};
exports.getDateTimeAfterElapsedTime = getDateTimeAfterElapsedTime;
var getDateTimeBeforeElapsedTime = function (elapsed_time, time_unit, initial_date) {
    var toDuration = moment_3["default"].duration(elapsed_time, time_unit);
    return initial_date.subtract(toDuration);
};
exports.getDateTimeBeforeElapsedTime = getDateTimeBeforeElapsedTime;
var startOf = function (moment, scale) {
    return moment.startOf(scale);
};
exports.startOf = startOf;
var endOf = function (moment, scale) {
    return moment.endOf(scale);
};
exports.endOf = endOf;
var valueOf = function (moment) {
    return moment.valueOf();
};
exports.valueOf = valueOf;
var setOtherZone = function (date, timezone) {
    var dateWithoutZone = (0, moment_3["default"])(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
    var otherZone = moment_3["default"].tz(date, timezone).format("Z");
    var dateWithOtherZone = [dateWithoutZone, otherZone].join("");
    /* console.log(dateWithoutZone, otherZone, dateWithOtherZone) */
    console.log((0, moment_3["default"])(dateWithOtherZone).zone(otherZone));
    return new Date(dateWithOtherZone);
};
exports.setOtherZone = setOtherZone;
