import React from 'react';
import { UNSAFE_LocationContext, useLocation } from 'react-router-dom'
import Header from '../../header/header';
import Footer from '../../footer/footer';
import "./onlyJob.css"


const OnlyJob = (props) => {
	const location = useLocation();
    React.useEffect(() => {
        console.log('new Location', location)
    },[])

    return (
    	<div>
    		<Header/>
    			<div id="onlyjob-main-outside">
	                <div id="onlyjobpage-main">
                		<div className="job-content">
                			<div className="inner-job-content" style={{backgroundColor: "silver", fontSize: "30px"}}>
                				<div style={{textAlign: "center"}}>{location.state.companyName} - {location.state.fresher ? "Freshers" : "Experienced"}</div>
                			</div>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Post Name: </span> {location.state.examName}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Exam Date: </span> {location.state.postDateString}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Last Date to apply: </span> {location.state.postLastDateString}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Qualification: </span> {location.state.qualification}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Experience Required: </span>{location.state.experience} {location.state.experience > 1 ? "Years" : "Year"}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Job description: </span> {location.state.jobDescription}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Percentage required: </span> {location.state.minPercentage}% with no backlogs</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">CTC: </span> {location.state.ctc}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Year of Passing: </span> {location.state.yearOfPassing}</div>
	                        </div>
	                        <hr className='solid'/>
	                        <div className='inner-job-content'>
	                            <div><span className="side-heading">Apply here : </span><a href={location.state.url} style={{fontWeight: "bold"}}>Click Here!</a></div>
	                        </div>
                		</div>
	                </div>
                </div>
    		<Footer/>
    	</div>
    	)
}
export default OnlyJob;