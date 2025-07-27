import { useState } from "react"
import { InputElement } from "./InputElement";
import { Person } from "./Person";

export function Header() {
    const personFunction = Person();
    const [person, setPerson] = useState({firstName: personFunction.getFirstName(), lastName: personFunction.getLastName()});
    const [fullName, setFullName] = useState(person.firstName + ' ' + person.lastName);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const handleFirstNameChange = (e) => {
        const newFirstName = {...person, firstName: e.target.value}
        setPerson(newFirstName);
        setFullName(e.target.value + ' ' + person.lastName);
    }

    const handleLastNameChange = (e) => {
        const newLastName = {...person, lastName: e.target.value}
        setPerson(newLastName);
        setFullName(person.firstName + ' ' + e.target.value);
    }
    return (
        <>
            <h1>{fullName}</h1>
            <button onClick={toggleVisibility}>{isVisible ? 'Close' : 'Edit Name'}</button>
            {isVisible && (
                <>
            <label>
                First Name:{' '}
                <InputElement value={person.firstName} fun={handleFirstNameChange}/>
            </label>
            <label>
                Last Name:{' '}
                <InputElement value={person.lastName} fun={handleLastNameChange}/>
            </label>
                </>
            )}
        </>
    )
}