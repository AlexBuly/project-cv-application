import { useState } from "react"
import { FormInput } from "./FormInput";

export function Education() {
    const [isEditing, setIsEditing] = useState(false);
    const [education, setEducation] = useState({
    school: "Marshall University",
    title: "Web Application Development",
    date: "2022-2025"
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
        <h2>Education</h2>
        {isEditing ? (
            <form onSubmit={handleSubmit}>
                <FormInput name={"school"} value={education.school} onChange={handleChange} placeholder={"School Name"}/>
                <FormInput name={"title"} value={education.title} onChange={handleChange} placeholder={"Title of Study"}/>
                <FormInput name={"date"} value={education.date} onChange={handleChange} placeholder={"Date of Study"}/>
                <button type="submit">Submit</button>

            </form>
        ) : (
           <div>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Title:</strong> {education.title}</p>
          <p><strong>Date:</strong> {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
        )}
    </div>
  )
}