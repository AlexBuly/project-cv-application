import { Person } from "./Person"

export function Work() {
    const person = Person();
    return (
        <>
            <h3>{person.getWork()}</h3>
            <p>{person.getYears()}</p>
        </>
    )
}