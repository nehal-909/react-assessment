import React, { useState } from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.css";

function RegistrationForm() {
   // define state for form fields
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      retypePassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      town: "",
      region: "",
      postcode: "",
      country: "United Kingdom",
    });
  
    const [errors, setErrors] = useState({});
  
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
  
    // function to handle input
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    // validation logic
    const validateForm = () => {
        const newErrors = {};
    
        // Email validation
        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
    
        // Password validation
        if (!formData.password) {
          newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters";
        }
    
        // Retype Password validation
        if (!formData.retypePassword) {
          newErrors.retypePassword = "Retype Password is required";
        } else if (formData.retypePassword !== formData.password) {
          newErrors.retypePassword = "Passwords don't match";
        }
    
        // First Name validation
        if (!formData.firstName) {
          newErrors.firstName = "First Name is required";
        }
    
        // Last Name validation
        if (!formData.lastName) {
          newErrors.lastName = "Last Name is required";
        }
    
        // Phone Number validation
        if (!formData.phoneNumber) {
          newErrors.phoneNumber = "Phone Number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits only!";
          }
    
        // Address validation
        if (!formData.address) {
          newErrors.address = "Address is required";
        }
    
        // Region validation
        if (!formData.region) {
          newErrors.region = "Region is required";
        }
    
        // Postcode validation
        if (!formData.postcode) {
          newErrors.postcode = "Postcode is required";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        console.log("Form submitted successfully:", formData);
        // submit the form data to server here
        setIsSubmitted(true); // Set isSubmitted to true after submission
      } else {
        console.log("Form has errors");
      }
    };
  
    // Reset form data and errors after successful submission
    if (isSubmitted) {
      setFormData({
        email: "",
        password: "",
        retypePassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        town: "",
        region: "",
        postcode: "",
        country: "United Kingdom",
      });
      setErrors({});
      setIsSubmitted(false); // Reset isSubmitted to false
    }
  return (
    <>
     <div className="container" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
            <h2>USER REGISTRATION</h2>
      <p>Fields marked  <span style={{ color: "red" }}> * </span>  are required.</p>
      <form onSubmit={handleSubmit}>
        <div className=" row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email<span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control"/>
          </div>
          {errors.email && <span className="error" style={{color:"red"}}>{errors.email}</span>}
        </div>
        <div className=" row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password <span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control"/>
          </div>
          {errors.password && <span className="error" style={{color:"red"}}>{errors.password}</span>}
        </div>
        <div className=" row mb-3">
          <label htmlFor="retypePassword" className="col-sm-2 col-form-label">Retype Password<span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="password" id="retypePassword" name="retypePassword" value={formData.retypePassword} onChange={handleChange} className="form-control"/>
          </div>
          {errors.retypePassword && (
            <span className="error" style={{color:"red"}}>{errors.retypePassword}</span>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name<span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control"/>
          </div>
          {errors.firstName && (
            <span className="error" style={{color:"red"}}>{errors.firstName}</span>
          )}
        </div>
        <div className=" row mb-3">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name <span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control"/>
          </div>
          {errors.lastName && (
            <span className="error" style={{color:"red"}}>{errors.lastName}</span>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number<span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control"/>
          </div>
          {errors.phoneNumber && (
            <span className="error" style={{color:"red"}}>{errors.phoneNumber}</span>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">Address <span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control"/>
          </div>
          {errors.address && (
            <span className="error" style={{color:"red"}}>{errors.address}</span>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="town" className="col-sm-2 col-form-label">Town</label>
          <div className="col-sm-10">
          <input type="text" id="town" name="town" value={formData.town} onChange={handleChange} className="form-control"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="region" className="col-sm-2 col-form-label">Region <span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="text" id="region" name="region" value={formData.region} onChange={handleChange} className="form-control"/>
          </div>
          {errors.region && (
            <span className="error" style={{color:"red"}}>{errors.region}</span>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="postcode" className="col-sm-2 col-form-label">Postcode / Zip <span style={{ color: "red" }}>*</span> </label>
          <div className="col-sm-10">
          <input type="text" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} className="form-control"/>
          </div>
          {errors.postcode && (
            <span className="error" style={{color:"red"}}>{errors.postcode}</span>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="country" className="col-sm-2 col-form-label">Country <span style={{ color: "red" }}>*</span> </label>
          <select id="country" name="country" value={formData.country} onChange={handleChange} className="form-select" >
            <option value="United Kingdom">United Kingdom</option>
            <option> USA </option>
            <option> UAE </option>
            <option>India </option>
            <option> France </option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
        </div> 
    </>
  );
}

export default RegistrationForm;
















