import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

const DatePick = ({ onChangeEndDate }) => {
  const [dateValue, setDateValue] = useState(new Date());

  const onChangeDate = (e) => {
    setDateValue(new DateObject(e).format("YYYY-MM-DD"));
    onChangeEndDate(new DateObject(e).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    onChangeDate(new DateObject().format("YYYY-MM-DD"));
  }, []);

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <>
      <DatePicker
        className="blue"
        inputClass="custom-input"
        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
        render={<InputIcon />}
        format="YYYY-MM-DD"
        disableMonthPicker
        monthYearSeparator="|"
        weekDays={weekDays}
        arrow={false}
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        value={dateValue}
        onChange={onChangeDate}
        range
      />
    </>
  );
};

export default DatePick;
