"use strict";
exports.__esModule = true;
exports.TimePickerBinding = void 0;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var pickers_1 = require("@material-ui/pickers");
var moment_1 = require("@material-ui/pickers/adapter/moment");
var MomentTzBindings_1 = require("./MomentTzBindings");
(0, MomentTzBindings_1.setTz)("Asia/Muscat");
var TimePickerBinding = function () {
    var time;
    var _a = react_1["default"].useState(time), date = _a[0], setdate = _a[1];
    console.log(date);
    var handleDateChange = function (d) {
        console.log(d.valueOf());
        setdate(d);
    };
    return (<pickers_1.LocalizationProvider dateAdapter={moment_1["default"]}>
      <pickers_1.TimePicker renderInput={function (props) { return <core_1.TextField {...props} label="test"></core_1.TextField>; }} value={date === undefined ? null : date} onChange={function (date) { return date && handleDateChange(date); }} ampm={false} className={"timepicker-root"}/>
    </pickers_1.LocalizationProvider>);
};
exports.TimePickerBinding = TimePickerBinding;
