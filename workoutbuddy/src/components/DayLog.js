// this takes in a date and then calls on the API to pull all of the workout data for that specific date

import AddExercise from "./AddExercise";
import DateSelector from "./DateSelector";
import DateTitle from "./DateTitle";

const DayLog = ({date}) => {
    return(
        <>
            <DateTitle/>
            <DateSelector/>
            <p></p>
            <AddExercise/>
        </>
    )
}

export default DayLog;