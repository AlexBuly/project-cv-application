export function Person() {
    const person = {
        firstName: "Alex",
        lastName: "Buly",
        education: "Marshall Univerity",
        work: "Desk Assistant",
        years: "2024-2025"
    }

    const getFirstName = () => {
        return person.firstName;
    }

    const getLastName = () => {
        return person.lastName;
    }

    const getEducation = () => {
        return person.education;
    }

    const getWork = () => {
        return person.work;
    }

    const getYears = () => {
        return person.years;
    }

    return {getFirstName, getLastName, getEducation, getWork, getYears}
}