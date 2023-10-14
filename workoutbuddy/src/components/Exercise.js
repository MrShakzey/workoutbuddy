// a single log entry for a given exercise with the weight and number of reps
// this has an edit/delete button to change it after it has been logged if necessary

import Set from "./Set";

const Exercise = ({name, weight, reps}) => {
    return(
        <>
        <h3>{name}</h3>
        <button>Delete</button>
        <Set weight={weight} reps={reps}/>
        </>
    )
}

export default Exercise;