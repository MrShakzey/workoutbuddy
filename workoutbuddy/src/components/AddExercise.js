// choose an exercise from the drop down, type in the weight in kg, type in the reps for the set, hit add
// clicking add will post it to the database, at the same time a get will happen to update the front end
import { useState } from "react";

const AddExercise = ({ onAdd }) => {

    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !weight || !reps) {
            alert('Please complete the form!')
        }
        else{   
            onAdd({ name, weight, reps });
            
            setName('');
            setWeight('');
            setReps('');
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <input type="text" placeholder="Exercise name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <input type="number" className='form-control' placeholder="Weight (kg)" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className='form-control'>
                    <input type="number" className='form-control' placeholder="Reps" min="1" value={reps} onChange={(e) => setReps(e.target.value)} />
                </div>
                <div className="btn-block-div">
                    <button type='submit' className="btn btn-block">Add</button>
                </div>
            </form>
        </>
    )
}

export default AddExercise;