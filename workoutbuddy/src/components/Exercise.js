// a single log entry for a given exercise with the weight and number of reps
// this has an edit/delete button to change it after it has been logged if necessary

import Set from "./Set";

const Exercise = ({name, weight, reps}) => {
    return(
        <div >
        <button>Delete</button>
        <Set weight={weight} reps={reps}/>
        </div>
    )
}

export default Exercise;