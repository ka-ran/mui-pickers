"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePickerBinding = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@material-ui/core");
const pickers_1 = require("@material-ui/pickers");
const moment_1 = __importDefault(require("@material-ui/pickers/adapter/moment"));
const TimePickerBinding = ({ date, handleDateChange }) => {
    /* let time: any;
    let [date, setdate] = React.useState(time);
    console.log(date);
    const handleDateChange = (d: momentTimezone.Moment) => {
      console.log(d.valueOf());
      setdate(d);
    }; */
    return ((0, jsx_runtime_1.jsx)(pickers_1.LocalizationProvider, Object.assign({ dateAdapter: moment_1.default }, { children: (0, jsx_runtime_1.jsx)(pickers_1.TimePicker, { renderInput: (props) => (0, jsx_runtime_1.jsx)(core_1.TextField, Object.assign({}, props, { label: "test" })), value: date === undefined ? null : date, onChange: (date) => date && handleDateChange(date), ampm: false, className: "timepicker-root" }) })));
};
exports.TimePickerBinding = TimePickerBinding;
