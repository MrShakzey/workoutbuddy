// choose an exercise from the drop down, type in the weight in kg, type in the reps for the set, hit add
// clicking add will post it to the database, at the same time a get will happen to update the front end
import { useState } from "react";
import CreatableSelect from 'react-select/creatable'

const AddExercise = ({ onAdd, exerciseList }) => {

    const [name, setName] = useState(null);
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !weight || !reps) {
            alert('Please complete the form!')
        }
        else{
            onAdd({ name: name.value, weight, reps });
            
            setName(null);
            setWeight('');
            setReps('');
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="creatableDiv">
                    <CreatableSelect className="creatable" placeholder='Exercise name' options={exerciseList} value={name} onChange={(e) => setName(e)}/>
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