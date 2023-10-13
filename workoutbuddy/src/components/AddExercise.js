// choose an exercise from the drop down, type in the weight in kg, type in the reps for the set, hit add
// clicking add will post it to the database, at the same time a get will happen to update the front end

const AddExercise = () => {
    return(
        <>
        <input type="text" placeholder="Exercise name"/>
        <input type="text" placeholder="Weight (kg)"/>
        <input type="number" placeholder="Reps"/>
        <button>Add</button>
        </>
    )
}

export default AddExercise;