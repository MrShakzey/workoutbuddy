// component which houses the list of exercises. each log is grouped together by the exercise type
// each group has a delete button and it will delete all the logs beneath it

import Exercise from "./Exercise";

const Exercises = ({ exercises }) => {

    var results = exercises.reduce(function (r, a) {
        r[a.name] = r[a.name] || [];
        r[a.name].push(a);
        return r;
    }, Object.create(null));

    var objEntries = Object.entries(results);
    console.log(objEntries);

    return (
        Object.entries(results).map(([exerciseName, sets]) => {
            return (
                <div>
                    <h3>{exerciseName}</h3>
                    <div>
                        {
                            sets.map(set => (
                                <Exercise name={exerciseName} weight={set.weight} reps={set.reps} />
                            ))
                        }
                    </div>
                </div>
            )
        })
    )
}

export default Exercises;