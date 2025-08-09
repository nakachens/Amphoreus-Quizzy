import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserForm() {
    const [inputName, setInputName] = useState("");
    const { setName } = useContext(UserContext);

    function handleInputChange(e) {
        setInputName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setName(inputName);
        window.history.pushState({}, '', "/quiz");
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={inputName}
                    onChange={handleInputChange}
                    required
                    placeholder="◝(ᵔᗜᵔ)◜enter! enter! enter your name!"
                />
                <input type="submit" value="Done" />
            </form>
        </div>
    )
}