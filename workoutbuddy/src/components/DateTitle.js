// just the date title for the selected date. If it is "today" then it will say "Today | LongDateFormat"

const DateTitle = ({date}) => {
    return(
        <div>
            <h2>{date}</h2>
        </div>
    )
}

export default DateTitle;