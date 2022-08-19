import React from 'react'
import "./registrationForm.css"

const RegistrationForm = () => {



   return(
      <div className="registrationForm">
         <form>
            <input
               type="text"
               placeholder="Random Screen Name"
               // button here to generate random name
            />
            <input
               type="text"
               placeholder="First Name"
            />
            <input
               type="text"
               placeholder="Last Name"
            />
            <input
               type="text"
               placeholder="Street Adress"
            />
            <input
               type="text"
               placeholder="City"
            />
            <input
               type="text"
               placeholder="State"
            />
            <input
               type="text"
               placeholder="Zip Code"
            />
            <input
               type="text"
               placeholder="Password"
            />
            <input
               type="text"
               placeholder="Number Of Children"
            />
            <input
               type="text"
               placeholder="Emergency Contact Name"
            />
            <input
               type="text"
               placeholder="Emergency Contact Phone Number"
            />
         </form>
      </div>
   )
}

export default RegistrationForm