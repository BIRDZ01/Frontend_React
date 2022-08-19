import React from 'react'
import "./registrationForm.css"

const RegistrationForm = () => {



   return(
      <div className="registrationForm">
         <form>
            <label htmlFor="sname">Random Screen Name</label>
            <input
               type="text"
               id="sname"
               name="sname"
               placeholder="Random Screen Name"
               // random screen name generated by label as hyperlink
            />

            <label htmlFor="fname">First Name</label>
            <input
               type="text"
               id="fname"
               name="firstName"
               placeholder="First Name"
            />

            <label htmlFor="lname">Last Name</label>
            <input
               type="text"
               id="lname"
               name="lastName"
               placeholder="Last Name"
            />

            <label htmlFor="street">Street Address</label>
            <input
               type="text"
               id="street"
               name="street"
               placeholder="Street Adress"
            />

            <label htmlFor="city">City</label>
            <input
               type="text"
               id="city"
               name="city"
               placeholder="City"
            />

            <label htmlFor="state">State</label>
            <input
               type="text"
               id="state"
               name="state"
               placeholder="State"
            />

            <label htmlFor="zip">Zipcode</label>
            <input
               type="number"
               id="zip"
               name="zip"
               placeholder="Zip Code"
            />

            <label htmlFor="password">Password</label>
            <input
               type="password"
               id="password"
               name="password"
               placeholder="Password"
            />

            <label htmlFor="children">Number of Children</label>
            <input
               type="number"
               id="children"
               name="children"
               placeholder="Number Of Children"
            />

            <label htmlFor="ecname">Emergency Contact Name</label>
            <input
               type="text"
               id="ecname"
               name="ecname"
               placeholder="Emergency Contact Name"
            />

            <label htmlFor="ecnumber">Emergency Contact Number</label>
            <input
               type="number"
               id="ecnumber"
               name="ecnumber"
               placeholder="Emergency Contact Phone Number"
            />

            <input type="submit"></input>
         </form>
      </div>
   )
}

export default RegistrationForm