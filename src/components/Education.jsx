import { Person } from "./Person"

export function Education() {
    const person = Person();
    return (
        <>
            <h3>{person.getEducation()}</h3>
        </>
    )
}