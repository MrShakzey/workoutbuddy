// a single log entry for a given exercise with the weight and number of reps
// this has an edit/delete button to change it after it has been logged if necessary

const Exercise = ({weight, reps}) => {
    return(
        <div>
            <p>{weight}kg for {reps}rep(s) 
                <button className="btn btn-modify-task">Delete</button>
                <button className="btn btn-modify-task">Edit</button> 
            </p>
        </div>
    )
}

export default Exercise;