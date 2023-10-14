// component which houses the list of exercises. each log is grouped together by the exercise type
// each group has a delete button and it will delete all the logs beneath it

import Exercise from "./Exercise";

const Exercises = ({exercises}) => {
    return(
        exercises.map((exercise) => (
            <Exercise name={exercise.name} weight={exercise.weight} reps={exercise.reps}/>
        ))       
    )
}

export default Exercises;