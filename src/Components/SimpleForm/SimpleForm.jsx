
const SimpleForm = () => {

    
    const handleSubmit = e => {
        e.preventDefault(); // did not reload

        console.log('Name = ', e.target.name.value);
        console.log('Email = ', e.target.email.value);
        console.log('Email = ', e.target.password.value);



        console.log('Submitted.')
    }

   

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Name */}
                <input className="border border-red-600" type="text" name='name' placeholder="Enter Search" />

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

export default SimpleForm;