// a button that when clicked, will cause the main view to switch to a calendar view
// the button itself will also turn into a X when the calendar view is open to switch back to the
// current selected date

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import { useEffect } from 'react';

const DateSelector = ({onChangeDate}) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        onChangeDate(selectedDate);
        console.log("selected date: " + selectedDate);                    
      }, [selectedDate]);

    return (
        <div>
            <DatePicker selected={selectedDate}
                        dateFormat={'yyyy-MM-dd'}
                        onChange={newDate => {
                            setSelectedDate(newDate);}}>
            </DatePicker>                
        </div>
    )
}

export default DateSelector;