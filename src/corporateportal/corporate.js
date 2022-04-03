import Header from '../header/header';
import Footer from '../footer/footer';
import "./corporate.css"
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../governmentportal/government.css";
import Marquee from 'react-fast-marquee';
// import { useNavigate } from 'react-router-dom';
import Select from "react-select";
// import data from './datajobs.json';
import Job from '../governmentportal/job';
import axios from 'axios'

const Corporate = () => {
    const [data, setData] = useState([]);
    const [job, setJob] = useState({state: 'Karnataka'});

    useEffect(() => {
        fetchData();
    }, [])

    const navigate = useNavigate();
    const fetchData = () => {
        axios.get("https://jobs-finite.herokuapp.com/getAllPrivatePosts")
            .then(res => {
                setData([...res.data])
            }) 
            .catch(err => console.log(err));
    }
    return (
        <div>
            <Header />
            <h2 style={{textAlign: "center"}}>Private Jobs</h2>
            <div id="govtpage-main-outside">
                        <div id="govtpage-main">
                        <div className='state'>For Freshers</div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Post Name</th>
                                        <th>Qualification</th>
                                        <th>Last Date</th>
                                        <th>More Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data && data.filter((index) => index.fresher === true).map((item,ind) => {
                                return (
                                <tr key={ind}>
                                    <td>{item.companyName}</td>
                                    <td>{item.examName}</td>
                                    <td>{item.qualification}</td>
                                    <td>{item.postLastDateString}</td>
                                    <td><a href='' onClick={() => {
                                            navigate("/privatePortal/job", {state: item});
                                        }}>Next</a>
                                        </td>
                                </tr>
                                )})}
                                </tbody>
                            </table>
                        </div>
                        <div id="govtpage-main">
                        <div className='state'>For Experienced</div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Post Name</th>
                                        <th>Experience</th>
                                        <th>Last Date</th>
                                        <th>More Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data && data.filter((index) => index.fresher === false).sort((a, b) => a.experience - b.experience).map((item,ind) => {
                                return (
                                <tr key={ind}>
                                    <td>{item.companyName}</td>
                                    <td>{item.examName}</td>
                                    <td>{item.experience}</td>
                                    <td>{item.postLastDateString}</td>
                                    <td><a href='' onClick={() => {
                                            navigate("/privatePortal/job", {state: item});
                                        }}>Next</a>
                                        </td>
                                </tr>
                                )})}
                                </tbody>
                            </table>
                        </div>
                </div>
                
            <Footer />
        </div>
    );
};

export default Corporate;