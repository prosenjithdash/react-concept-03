import { useState } from "react";

const StateForm = () => {

    // Define state for name
    const [name, setName] = useState(null);

    // Define state for email
    const [email, setEmail] = useState(null);

    // Define state for passwaord
    const [password, setPassword] = useState(null);

    // Define state for passwaord
    const [error, setError] = useState(null);


    // handle Submit
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('State submit')
        if (password.length < 6) {
            setError('Must do greater then 6 password.')
        }
        else {
            setError('')
        }

        console.log(name)
        console.log(email)
        console.log(password)
    }

    // handleChangename
    const handleOnChangeName = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    // onChangeEmail
    const handleOnChangeEmail = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    // onChangeEmail
    const handleOnChangePassword = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Name */}
                <input onChange={handleOnChangeName} className="border border-red-600" type="text" name='name' placeholder="Enter Search" required />
                <br />

                {/* Email */}
                <input onChange={handleOnChangeEmail} className="border border-yellow-600" type="email" name="email" id="" required />

                <br />

                {/* Password */}
                <input onChange={handleOnChangePassword} className="border border-yellow-600" type="password" name="password" id="" required />

                <br />

                <input type="submit" value="Submit" />

            </form>

            {

                error && <p>{ error}</p>
            }
        </div>
    );
};

export default StateForm;