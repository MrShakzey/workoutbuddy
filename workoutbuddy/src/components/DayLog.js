// this takes in a date and then calls on the API to pull all of the workout data for that specific date

import AddExercise from "./AddExercise";
import DateSelector from "./DateSelector";
import DateTitle from "./DateTitle";
import Exercises from "./Exercises";
import { useState } from "react";
import { useEffect } from "react";

const API_URL = "https://localhost:7074/api/Workout/2023-10-22";

const DayLog = ({ date }) => {

  const getWorkouts = async () => {
    await fetch(API_URL)
      .then(response => response.json())
      .then(data => setExercises(data));
  }

  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    // instead of adding directly, add to the database and then pull it. so that its in the right form
    setExercises([...exercises, exercise]);
  }

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <>
      <DateTitle date={date} />
      <DateSelector />
      <p></p>
      <AddExercise onAdd={addExercise} />
      <Exercises exercises={exercises} />
    </>
  )
}

export default DayLog;