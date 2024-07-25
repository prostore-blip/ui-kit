import React, {useState} from 'react';
import s from './datePicker.module.scss'
import {Calendar} from "../../assets/icons/";

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (event) => {
        setSelectedDate(new Date(event.target.value));
    };
    console.log(selectedDate.toISOString().slice(0, 10))
    return (
        <div className={s.datePickerWrapper}>
            <input
                type="date"
                className={s.datePicker}
                pattern="\d{4}-\d{2}-\d{2}"
                value={selectedDate.toISOString().slice(0, 10)}
                onChange={handleDateChange}
            />
            <span className={s.customIcon}>
                <Calendar />
            </span>
        </div>
    );
};

