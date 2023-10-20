// this takes in a date and then calls on the API to pull all of the workout data for that specific date

import AddExercise from "./AddExercise";
import DateSelector from "./DateSelector";
import DateTitle from "./DateTitle";
import Exercises from "./Exercises";
import { useState } from "react";

const DayLog = ({date}) => {

    const [exercises, setExercises] = useState([]);

      const addExercise = (exercise) => {
        setExercises([...exercises, exercise]);
      }

    return(
        <>
            <DateTitle date={date}/>
            <DateSelector/>
            <p></p>
            <AddExercise onAdd={addExercise}/>
            <Exercises exercises={exercises}/>
        </>
    )
}

export default DayLog;