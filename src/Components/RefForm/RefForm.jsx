//46-3 Explore Ref And Controlled And Uncontrolled Components

import { useEffect, useRef } from "react";

const RefForm = () => {

    // name ref
    const nameRef = useRef();

    // email ref
    const emailRef = useRef();

    // password ref
    const passwordRef = useRef();


    // default set cursor
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    
    // Event handlerSubmit
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Name */}
                <input ref={nameRef} className="border border-red-600" type="text" name='name' placeholder="Enter Search" />
                <br />

                {/* Email */}
                <input defaultValue={'pappu@gmail.com'} ref={emailRef} className="border border-yellow-600" type="email" name="email" id="" />
                <br />

                {/* Password */}
                <input ref={passwordRef} className="border border-yellow-600" type="password" name="password" id="" />
                <br />

                {/* Submit */}
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default RefForm;