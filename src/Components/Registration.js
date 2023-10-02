import React from "react"
import "./Registration.css"
import App from "../App.js"
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

    const navigate = useNavigate();

    React.useEffect(()=>{
        //console.log(formData)
    }, [formData])

    function handleChange(event){
        let {name, value}=event.target
        updateFormData(old=>({...old, [name]:value}))
    }

    function handleSubmit(event){
        console.log(formData)
        const date = new Date();
        var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
        var ISTTime = new Date(date.getTime()+ISToffSet*60*1000);
    
    
        // if (
        //   formData.fullName !== "" && formData.email !== "" && formData.phone !== "" && formData.gender !== "" && formData.college !== "" && formData.city !== "" && formData.state !== "" && isTeamShowing
        //     ? !team.slice(0, 2).some((eachMemberObj) => eachMemberObj.n === "")
        //     : true && personName?.length !== 0
        // ) {
        //   if (!validator.isEmail(formData.email)) {
        //     alert("Please Enter Your Email.");
        //     return;
        //   } else if (!validator.isMobilePhone(formData.phone, "en-IN")) {
        //     alert("Please enter a valid phone number!");
        //     return;
        //   }

    

    
        let usr_data = {
            Submit_Time: ISTTime,
            Name: formData.name,
            Email: formData.email,
            Mobile_No: formData.mobile,
            College_Name: formData.college,
            Personal_Address:formData.personalAddress,
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
            <div>
            <textarea
                //type="text"
                placeholder="Personal Address"
                name="personalAddress"
                value={formData.personalAddress}
                onChange={handleChange}
                rows={5}
                />
                <textarea
                //type="text"
                placeholder="College Address"
                name="collegeAddress"
                value={formData.collegeAddress}
                onChange={handleChange}
                rows={5}
                
                />  
            </div>
        </div>
        <button as="Link" to="" onClick={()=>{handleSubmit
                                              navigate("/")}}>Submit</button>
    </div>
        )
    }

    