import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import Header from '../header/header';
import "./government.css";
import Footer from '../footer/footer';

const StateGovernment = () => {
    const [data, setData] = useState([]);
    // const [job, setJob] = useState({ state: 'Karnataka' });

    useEffect(() => {
        fetchData();
    }, [])

    const navigate = useNavigate();
    const fetchData = () => {
        // document.getElementById('bank-body').innerHTML = '';
        axios.get("https://jobs-finite.herokuapp.com/getAllStateGovtPosts")
            .then(res => {
                setData([...res.data])
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <Header />
            <h2 style={{ textAlign: "center" }}>State Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>Andaman and Nicobar Islands</div>
                    <table className='table' id='andaman'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {data && data.filter(index => index.state === "Andaman").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Andhra Pradesh</div>
                    <table className='table' id='Andhra'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "AndhraPradesh").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Arunachal Pradesh</div>
                    <table className='table' id='Arunachal'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "ArunachalPradesh").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Assam</div>
                    <table className='table' id='Assam'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Assam").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Bihar</div>
                    <table className='table' id='Bihar'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Bihar").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Chhattisgarh</div>
                    <table className='table' id='Chhattisgarh'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Chhattisgarh").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Goa</div>
                    <table className='table' id='Goa'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Goa").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Gujarat</div>
                    <table className='table' id='Gujarat'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Gujarat").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Haryana</div>
                    <table className='table' id='Haryana'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Haryana").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Himachal Pradesh</div>
                    <table className='table' id='Himachal'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "HimachalPradesh").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Jharkhand</div>
                    <table className='table' id='Jharkhand'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Jharkhand").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Karnataka</div>
                    <table className='table' id='Karnataka'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Karnataka").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Kerala</div>
                    <table className='table' id='Kerala'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Kerala").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Madhya Pradesh</div>
                    <table className='table' id='Madhya'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "MadhyaPradesh").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Maharastra</div>
                    <table className='table' id='Maharastra'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Maharastra").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Manipur</div>
                    <table className='table' id='Manipur'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Manipur").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Meghalaya</div>
                    <table className='table' id='Meghalaya'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Meghalaya").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Mizoram</div>
                    <table className='table' id='Mizoram'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Mizoram").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Nagaland</div>
                    <table className='table' id='Nagaland'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Nagaland").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Odisha</div>
                    <table className='table' id='Odisha'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Odisha").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Punjab</div>
                    <table className='table' id='Punjab'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Punjab").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Rajasthan</div>
                    <table className='table' id='Rajasthan'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Rajasthan").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Sikkim</div>
                    <table className='table' id='Sikkim'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Sikkim").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Tamil Nadu</div>
                    <table className='table' id='Tamil'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Tamilnadu").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Telangana</div>
                    <table className='table' id='Telangana'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Telangana").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Tripura</div>
                    <table className='table' id='Tripura'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Tripura").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Uttar Pradesh</div>
                    <table className='table' id='Uttar'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "UttarPradesh").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Uttarakhand</div>
                    <table className='table' id='Uttarakhand'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "Uttarakhand").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>West Bengal</div>
                    <table className='table' id='West'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state === "WestBengal").map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StateGovernment;