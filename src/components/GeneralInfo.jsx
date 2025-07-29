import { useState } from "react";
import { FormInput } from "./FromInput";

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        name: "Alex Buly",
        email: "myemail@example.com",
        phone: "123-456-0904",
    });

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="section">
            <h2>General Information</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                <FormInput name={"name"} value={info.name} onChange={handleChange} placeholder={"Name"}/>
                <FormInput name={"email"} value={info.email} onChange={handleChange} placeholder={"Email"}/>
                <FormInput name={"phone"} value={info.phone} onChange={handleChange} placeholder={"Phone"}/>
                <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                <p><strong>Name:</strong> {info.name}</p>
                <p><strong>Email:</strong> {info.email}</p>
                <p><strong>Phone:</strong> {info.phone}</p>
                <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )

}