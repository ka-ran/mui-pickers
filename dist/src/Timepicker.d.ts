/// <reference types="react" />
import momentTimezone from "moment-timezone";
declare type Props = {
    date: momentTimezone.Moment;
    handleDateChange: any;
    tz: string;
};
export declare const TimePickerBinding: ({ date, handleDateChange, tz }: Props) => JSX.Element;
export {};
