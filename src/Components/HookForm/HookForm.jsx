import { useState } from "react";
import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    // state for input
    const [name, handleNameChange] = useInputState('Pappu');

    // handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        console.log('From data ',name)
    }

    // // handleOnChange
    // const handleOnChange = () => {
        
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Name */}
                <input value={name} onChange={handleNameChange} className="border border-red-600" type="text" name='name' placeholder="Enter Search" />

                <br />

                {/* Email */}
                <input className="border border-yellow-600" type="email" name="email" id="" />

                <br />

                {/* Password */}
                <input className="border border-yellow-600" type="password" name="password" id="" />

                <br />

                {/* Submit */}
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default HookForm;