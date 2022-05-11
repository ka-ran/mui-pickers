import React from "react";
import momentTimezone from "moment-timezone";
import { TextField } from "@material-ui/core";
import { TimePicker, LocalizationProvider } from "@material-ui/pickers";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { setTz } from "./MomentTzBindings";

setTz("Asia/Muscat");

const TimePickerBinding = () => {
  let time: any;
  let [date, setdate] = React.useState(time);
  console.log(date);
  const handleDateChange = (d: momentTimezone.Moment) => {
    console.log(d.valueOf());
    setdate(d);
  };

  return (
    <LocalizationProvider dateAdapter={MomentAdapter}>
      <TimePicker
        renderInput={(props) => <TextField {...props} label="test"></TextField>}
        value={date === undefined ? null : date}
        onChange={(date) => date && handleDateChange(date)}
        ampm={false}
        className={"timepicker-root"}
      />
    </LocalizationProvider>
  );
};

export { TimePickerBinding };
