
import { useState } from "react"
import axios from 'axios'
import './admin.css'


const type = [{name: "govt"},{name: "private"}]

const Excel = () => {
	const [select,setSelect] = useState("");

	let formData = new FormData();


	const handleFile = (e) => {

		if(e.target && e.target.files[0]){
			formData.append('file',e.target.files[0]);
		}
	}

	const handleStateChange = (e) => {
		// console.log(type[e.target.value].name)
		setSelect(type[e.target.value].name)
	}


	const uploadFile = () => {
		console.log(formData,select)
		axios.post("https://jobs-finite.herokuapp.com/excelUpload", {
			      method: "post",
			      body: {file: formData, fileType: select}
			    })
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<div className="header-admin"> Hello Admin, Upload the excel file</div>
			
			<div className="select-upload">
			<div style={{marginBottom: "20px"}}>Select govt or private </div>
			<select  onChange={handleStateChange}>
				{type.map((item,itemIndex) => {
					return <option key={itemIndex} value={itemIndex}>{item.name}</option>
				})}
			</select>
			</div>

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

