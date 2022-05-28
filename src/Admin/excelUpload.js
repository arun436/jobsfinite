
import useState from "react"
import axios from 'axios'
import './admin.css'

const Excel = () => {

	let formData = new FormData();


	const handleFile = (e) => {

		if(e.target && e.target.files[0]){
			formData.append('file',e.target.files[0]);
		}
	}

	const uploadFile = () => {
		axios.post("https://jobs-finite.herokuapp.com/excelUpload", {formData})
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<div className="header-admin"> Hello Admin, Upload the excel file</div>
			<div className="file-upload">
				<input type="file" name="file" onChange={handleFile}/>
			</div>
			<div className="btn-upload">

			<button onClick={uploadFile}>Upload</button>
			</div>
		</div>
		)

}

export default Excel;

