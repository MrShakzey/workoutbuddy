// a single log entry for a given exercise with the weight and number of reps
// this has an edit/delete button to change it after it has been logged if necessary

const Exercise = ({id, weight, reps, onDelete}) => {

    return(
        <div>
            <p>{weight}kg for {reps}rep(s) 
                <button className="btn btn-modify-task" onClick={() => onDelete(id)}>Delete</button>
                <button className="btn btn-modify-task">Edit</button> 
            </p>
        </div>
    )
}

export default Exercise;