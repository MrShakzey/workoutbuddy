// component which houses the list of exercises. each log is grouped together by the exercise type
// each group has a delete button and it will delete all the logs beneath it

import Exercise from "./Exercise";

const Exercises = ({ exercises, deleteExercise, updateExercise }) => {

    return (
        <div className="container">
            {Object.values(exercises).map((exercise) => (
                <div className="task">
                    <h3>{exercise.name}</h3>
                    <div>
                        {
                            exercise.sets.map(set => (
                                <Exercise id={set.id} 
                                          originalWeight={set.weight} 
                                          originalReps={set.reps} 
                                          onDelete={deleteExercise}
                                          onUpdate={updateExercise} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Exercises;