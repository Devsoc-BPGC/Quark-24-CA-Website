import React from "react"
import "./Registration.css"
import App from "../App.js"
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router-dom";

export default function Registration(){
    let [formData, updateFormData]=React.useState({
        name:"",
        mobile:"",
        email:"",
        college:"",
        personalAddress:"",
        collegeAddress:"",
    })

        const [selectedGender, setSelectedGender] = useState('');
      
        const handleGenderChange = (event) => {
          setSelectedGender(event.target.value);
        };

    const navigate = useNavigate();

    React.useEffect(()=>{
        //console.log(formData)
    }, [formData])

    function handleChange(event){
        let {name, value}=event.target
        updateFormData(old=>({...old, [name]:value}))
    }

    function handleSubmit(event){
        if(formData.name==""||formData.email==""||formData.mobile==""||formData.college==""||formData.college==""||formData.collegeAddress==""||selectedGender==""){
            alert("Please enter all details and submit.")
            return
        }
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!emailRegex.test(formData.email)){
            alert("Please enter a valid email.")
            return
        }
        var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
        if(!phoneRegex.test(formData.mobile)){
            alert("Please enter a valid phone number.")
            return
        }
        console.log(formData)
        const date = new Date();
        var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
        var ISTTime = new Date(date.getTime()+ISToffSet*60*1000);
    
    
        let usr_data = {
            Submit_Time: ISTTime,
            Name: formData.name,
            Gender: selectedGender,
            Email: formData.email,
            Mobile_No: formData.mobile,
            College_Name: formData.college,
            College_Address:formData.collegeAddress,
        };
    

        fetch("https://sheet.best/api/sheets/f2876a3c-f7ef-465b-b5ef-283934de8117", {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(usr_data),
        })
            .then((r) => r.json())
            .then((data) => {
            // The response comes here
            console.log(data);
            })
            .catch((error) => {
            // Errors are reported there
            console.log(error);
            });
            navigate("/")

    }

    return(
        <div className="registration">
        <h1>Registration<button as="Link" to="" onClick={()=>{
            updateFormData({
                name:"",
                mobile:"",
                email:"",
                college:"",
                personalAddress:"",
                collegeAddress:"",
            })
            navigate("/")
            
        }}>X</button></h1>
        <div className="registration-container">
            <div>
                <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="Mobile No."
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                />
                <input
                type="email"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="College Name"
                name="college"
                value={formData.college}
                onChange={handleChange}
                />
                
            </div>
            <div className="rightside">

               <div>
            
                  <select className="gender" id="gender" value={selectedGender} onChange={handleGenderChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  </div>
                 
               <div className="clg">
                <textarea
                //type="text"
                placeholder="College Address"
                name="collegeAddress"
                value={formData.collegeAddress}
                onChange={handleChange}
                rows={5}
                
                
                />  </div>
            </div>
        </div>
        <button as="Link" to="" onClick={()=>{handleSubmit()
                                              }}>Submit</button>
    </div>
        )
    }

    
