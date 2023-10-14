// choose an exercise from the drop down, type in the weight in kg, type in the reps for the set, hit add
// clicking add will post it to the database, at the same time a get will happen to update the front end
import { useState } from "react";

const AddExercise = ({onAdd}) => {
    
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please enter a task!')
        }

        onAdd({name, weight, reps});

        setName('');
        setWeight('');
        setReps('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Exercise name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="number" placeholder="Weight (kg)" min="0" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                <input type="number" placeholder="Reps" min="1" value={reps} onChange={(e) => setReps(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddExercise;