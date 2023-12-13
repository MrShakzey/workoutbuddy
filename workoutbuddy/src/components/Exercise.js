// a single log entry for a given exercise with the weight and number of reps
// this has an edit/delete button to change it after it has been logged if necessary
import { useState } from "react";
import { useEffect } from "react";

const Exercise = ({ id, originalWeight, originalReps, onDelete, onUpdate }) => {

    const [showEdit, setShowEdit] = useState(false);
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!weight || !reps) {
            alert('Please complete the form!')
        }
        else{   
            onUpdate({ id, weight, reps });
            setShowEdit(false);
        }
    }

    useEffect(() => {
        setWeight(originalWeight);
        setReps(originalReps);
    }, [])

    return (
        <div>
            {
                showEdit ?
                <div>
                    <button className="btn btn-modify-task"
                            onClick={() => toggleEdit()}>Cancel</button>
                    <form onSubmit={onSubmit}>
                        <button className="btn btn-modify-task"
                                type="submit">Update</button>
                        <div>
                            <input className="form-edit" type="number" placeholder="Weight (kg)" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            <input className="form-edit" type="number" placeholder="Reps" min="0" value={reps} onChange={(e) => setReps(e.target.value)} />
                        </div>
                    </form>
                </div>
                :
                <div>
                    <button className="btn btn-modify-task"
                            onClick={() => onDelete(id)}>Delete</button>
                    <button className="btn btn-modify-task"
                            onClick={() => toggleEdit()}>Edit</button>
                    <p>{originalWeight}kg for {originalReps}rep(s)</p>
                </div>
            }
        </div>
    )
}

export default Exercise;