// this takes in a date and then calls on the API to pull all of the workout data for that specific date

import AddExercise from "./AddExercise";
import DateSelector from "./DateSelector";
import DateTitle from "./DateTitle";
import Exercises from "./Exercises";
import { useState } from "react";
import { useEffect } from "react";
import moment from 'moment';


const API_URL = "https://localhost:7074/api/Workout/";

const DayLog = () => {

  const getWorkouts = async () => {
     await fetch(`${API_URL}${moment(date).format('YYYY-MM-DD')}`)
      .then((response) => response.json())
      .then(data => setExercises(data));
  }

  const [date, setDate] = useState(new Date());
  const [exercises, setExercises] = useState([]);

  const changeDate = async (newDate) => {
    setDate(newDate);
  }

  const addExercise = async (exercise) => {  
    await fetch(`${API_URL}AddSetToWorkout?date=${moment(date).format('YYYY-MM-DD')}`, {
      method : 'POST',
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(exercise)
    }).then(() => {
      getWorkouts();
    })
  }

  useEffect(() => {
    getWorkouts();
  }, [date])

  return (
    <>
      <DateTitle date={date} />
      <DateSelector onChangeDate={changeDate}/>
      <p></p>
      <AddExercise onAdd={addExercise} />
      {exercises && <Exercises exercises={exercises} />}
    </>
  )
}

export default DayLog;