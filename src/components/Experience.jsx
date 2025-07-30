import { useState } from "react";
import { FormInput } from "./FormInput";

export function Experience() {
    const [isEditing, setIsEditing] = useState(false);
    const [experience, setExperience] = useState({
        company: "Marshall University Housing and Residence Life",
        position: "desk assistant",
        responsibilities: "Logging packages and checking in/out residents",
        from: "2024",
        until: "2025"
    });

    const handleChange = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    }

    return (
        <div className="experience">
            <h2 className="experience-heading">Experience</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <FormInput name={"company"} value={experience.company} onChange={handleChange} placeholder={"Company Name"}/>
                    <FormInput name={"positon"} value={experience.position} onChange={handleChange} placeholder={"Company Position"}/>
                    <FormInput name={"responsibilities"} value={experience.responsibilities} onChange={handleChange} placeholder={"Job Responsibilities"}/>
                    <FormInput name={"from"} value={experience.from} onChange={handleChange} placeholder={"Start Date"}/>
                    <FormInput name={"until"} value={experience.until} onChange={handleChange} placeholder={"End Date"}/>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p><strong>Company:</strong> {experience.company}</p>
                    <p><strong>Position:</strong> {experience.position}</p>
                    <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
                    <p><strong>From:</strong> {experience.from}</p>
                    <p><strong>Until:</strong> {experience.until}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}