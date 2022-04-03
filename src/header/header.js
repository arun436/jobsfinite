import { useState, useEffect } from "react";
import React from 'react'
import logo from "../images/logo.png";
import "./Header.css";
import Marquee from 'react-fast-marquee';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Select from "react-select";
import axios from 'axios'
import MuiAlert from "@mui/material/Alert";
import { Outlet, Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";



function Header() {

    const [boo, setBool] = useState(true);
    const [categories, setCategories] = useState([]);
    const [focus, setFocus] = useState(false);
    const [selectArray, changeSelectArray] = useState([])
    const [open, setOpen] = useState(false);
    const [openMsg, setOpenMsg] = useState("");
    const [fail, setFail] = useState(false);
    const [failMsg, setFailMsg] = useState("");
    const centralData = [
        {
            value: 1,
            label: "UPSC"
        },
        {
            value: 2,
            label: "Bank"
        },
        {
            value: 3,
            label: "Railways"
        },
        {
            value: 4,
            label: "SSC"
        },
        {
            value: 5,
            label: "All"
        }
    ];
    const stateData = [
        { value: 1, label: "Andhra Pradesh" }, { value: 2, label: "Arunachal Pradesh" }, { value: 3, label: "Assam" }, { value: 4, label: "Bihar" },
        { value: 5, label: "Chhattisgarh" }, { value: 6, label: "Goa" }, { value: 7, label: "Gujarat" }, { value: 8, label: "Haryana" }, { value: 9, label: "Himachal Pradesh" },
        { value: 10, label: "Jharkhand" }, { value: 11, label: "Karnataka" }, { value: 12, label: "Kerala" }, { value: 13, label: "Madhya Pradesh" },
        { value: 14, label: "Maharashtra" }, { value: 15, label: "Manipur" }, { value: 16, label: "Meghalaya" }, { value: 17, label: "Mizoram" },
        { value: 18, label: "Nagaland" }, { value: 19, label: "Odisha" }, { value: 20, label: "Punjab" }, { value: 21, label: "Rajasthan" },
        { value: 22, label: "Sikkim" }, { value: 23, label: "Tamil Nadu" }, { value: 24, label: "Telangana" }, { value: 25, label: "Tripura" },
        { value: 26, label: "Uttar Pradesh" }, { value: 27, label: "Uttarakhand" }, { value: 28, label: "West Bengal" }
    ]
    const selectArrayModified = [];

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(() => {
        if(window.location.pathname === "/"){
            document.getElementById("home-id").style.background = "white";
            document.getElementById("home-id").style.color = "black";
            document.getElementById("header-text").style.display = "none"
        }
        if(window.location.pathname === "/centralgovtPortal" || window.location.pathname === "/centralgovtPortal/job"){
            document.getElementById("central-id").style.background = "white";
            document.getElementById("central-id").style.color = "black"
        }
        if(window.location.pathname === "/stategovtPortal" || window.location.pathname === "/stategovtportal/job"){
            document.getElementById("state-id").style.background = "white";
            document.getElementById("state-id").style.color = "black"
        }
        if(window.location.pathname === "/privatePortal" || window.location.pathname === "/privatePortal/job"){
            document.getElementById("private-id").style.background = "white";
            document.getElementById("private-id").style.color = "black"
        }

    })

    const handleClick = () => {
        setOpen(true);
      };
      const handleFail = () => {
        setFail(true);
      };

      const handleClose = (event, reason) => {
        setOpen(false);
        setFail(false);
        setOpenMsg("");
        setFailMsg("");
      };
    const showAlert = () => {
        const val = document.getElementById('type-email').value;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(val)
        var validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (val === "" || !validRegex.test(val)) {
            // alert("Enter valid email address");
            setFailMsg("Enter Valid Email Address");
            handleFail();
        } else {
            let mail = document.getElementById("type-email").value;
            let name = mail.substring(0, mail.lastIndexOf("@"));
            
            // If they enter mail in private portal page and click on subscribe this if will be executed
            if(window.location.pathname === "/privatePortal" || window.location.pathname === "/privatePortal/job"){
                axios.post("https://jobs-finite.herokuapp.com/savePrivateJobSubscriber",{emailId: mail})
                    .then((res) => {
                        setOpenMsg(res.data);
                        handleClick();
                    })
                        .catch((e) => {
                            // console.log(mail)
                            setFailMsg(e.response.data.errorDescription);
                            handleFail();
                        })
                return;
            }
            
            // We need to remove the email entering option in unnecessary pages
            // if(window.location.pathname !== "/privatePortal" || window.location.pathname !== "/centralgovtPortal" || window.location.pathname !== "/stategovtportal") {
            //     document.getElementById("header-text").Style.display = "none"
            // }
            // else {
            //     document.getElementById("header-text").Style.display = "block"
            // }


            // If they haven't selected any category this if has to be executed
            if (selectArray.length === 0) {
                // alert("Please select the categories you need to get notified");
                setFailMsg("Please select the categories you need to get notified");
                handleFail();
                // document.getElementById('select-tag').autofocus = true;
            }
            else {
                
                // If they select all option in central page and it is incomplete need to confirm!
                if(selectArray[0] === "All" || selectArray[0] === "UPSC" || selectArray[0] === "Bank" || selectArray[0] === "Railways" || selectArray[0] === "SSC") {
                    axios.post("https://jobs-finite.herokuapp.com/saveCentralGovtSubscriber",{emailId: mail})
                        .then((res) => {
                            setOpenMsg(res.data);
                            handleClick();
                        })
                        .catch((e) => {
                            setFailMsg(e.response.data.errorDescription);
                            handleFail();
                        })
                    return;
                }

                // If they select any state then this if will be executed
                if(selectArray[0] !== "All" || selectArray[0] !== "UPSC" || selectArray[0] !== "Bank" || selectArray[0] !== "Railways" || selectArray[0] !== "SSC") {
                    // const emailData = {
                    //     emailId: mail,
                    //     state: selectArray[0]
                    // }
                    axios.post("https://jobs-finite.herokuapp.com/saveStateGovtSubscriber", {
                        emailId: mail,
                        state: selectArray[0]
                    }).then((res) => {
                            setOpenMsg(res.data);
                            handleClick();
                        })
                        .catch((e) => {
                            // console.log(selectArray[0]);
                            setFailMsg(e.response.data.errorDescription);
                            handleFail();
                        })
                }
            }
        }

    }

    const storeCategories = (e) => {
        // console.log(selected[selected.length-1])
        // console.log(e)

        const updatedCategories = e
        if(updatedCategories.length > 1) {
            // alert("Please select only one category");
            setFailMsg("Please select only one category");
            handleFail();
            e.preventDefault();
        }

        for (let i = 0; i < updatedCategories.length; i++) {
            selectArrayModified[i] = updatedCategories[i].label;
        }
        changeSelectArray([...selectArrayModified])

    }


    return (
        <div>
            <div>
                <div id="marquee-top">
                    <Marquee speed={100} pauseOnHover={true}><span>Get latest notifications and job alerts to your mail by subscribing below entering your mail.</span></Marquee>
                </div>
                <div id="header-main">
                    <div id="float-left">
                        <img src={logo} id="main-logo"></img>
                    </div>
                     <Snackbar
                        open={open}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        autoHideDuration={2000}
                        onClose={handleClose}
                      >
                        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                          {openMsg}
                        </Alert>
                      </Snackbar>
                      <Snackbar open={fail} anchorOrigin={{ vertical: "top", horizontal: "center" }}
                       autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                          {failMsg}
                        </Alert>
                      </Snackbar>
                    <div id="float-right">
                        <div id="multi-select">{window.location.pathname === "/centralgovtPortal" ?
                            <Select isMulti id="select-tag" placeholder="Select categories" options={centralData} onChange={storeCategories}
                                hideSelectedOptions={true}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })} /> : null}
                            {window.location.pathname === "/stategovtPortal" ? <Select
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })
                                } isMulti placeholder="Select categories" options={stateData} onChange={storeCategories} /> : null}
                        </div>
                        <div id="header-text">
                            <input type="email" id="type-email" placeholder="Enter your email address" />
                            <button id="header-text-button" onClick={showAlert}>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div id="float-right-mobile">
                        <div id="multi-select-mobile">{window.location.pathname === "/centralgovtPortal" ?
                            <Select isMulti id="select-tag-mobile" placeholder="Select categories" options={centralData} onChange={storeCategories}
                                hideSelectedOptions={true}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })} /> : null}
                            {window.location.pathname === "/stategovtPortal" ? <Select
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })
                                } isMulti placeholder="Select categories" options={stateData} onChange={storeCategories} /> : null}
                        </div>
                    </div>
            </div>
            {/* <div id="multi-select-mobile">{window.location.pathname === "/centralgovtPortal" ? 
                    <Select  isMulti placeholder="Select categories" options={centralData} /> : null}
                    {window.location.pathname === "/stategovtPortal" ? <Select  isMulti placeholder="Select categories" options={stateData} /> : null}
            </div> */}
            <div id="navbar-main">
                <a href="/" className="hide main" id="home-id">Home</a>
                <a href="" className="hide" id="contact-id">Contact us</a>
                <a href="/centralgovtPortal" className="govt-btn hide link" id="central-id">Central Government Jobs</a>
                <a href="/stategovtPortal" id="state-id">State Government Jobs</a>
                <a href="/privatePortal" className="hide" id="private-id">Private Jobs</a>
            </div>
        </div>
    )
}

export default Header;