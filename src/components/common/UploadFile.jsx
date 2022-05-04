import React, {useState} from 'react';
import {Button, Fab} from "@mui/material";
import {AddPhotoAlternateOutlined} from "@mui/icons-material";
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';

import { handlePostRequest } from "../../helper/requests";
import {errorDarkTopCenter, successDarkTopCenter} from "./beautify/Alerts";
import {useNavigate} from "react-router-dom";



export const UploadSingleImage = (props) => {
	const [selectedFile, setSelectedFile] = useState();
	const navigate = useNavigate();


	const uploadSingleImage = async (file) => {
		file.preventDefault()

		const formData = new FormData();
		formData.append('image', selectedFile, selectedFile.name);

		const response = await handlePostRequest(formData, props.uploadURL, sessionStorage.getItem('authToken'))

		if (response.status === 200) {
			successDarkTopCenter(response.data)
			setTimeout(() => {navigate('/profile')}, 5000)
		} else {
			errorDarkTopCenter(response.data)
		}
	}

	const singleImageSelectHandler = (e) => {
		console.log(e.target.files[0])
		setSelectedFile(e.target.files[0])
	}

	return (
	  <React.Fragment>
		  <div className="my-2">
			  <form onSubmit={uploadSingleImage}>
				  <input accept="image/*" id="file" className="d-none" type="file" onChange={singleImageSelectHandler}/>
				  <label htmlFor="file">
					  <Fab component="span">
						  <AddPhotoAlternateOutlined />
					  </Fab>
				  </label>
				  <Button type="submit"><UploadOutlinedIcon/></Button>
			  </form>
		  </div>
	  </React.Fragment>
  )
}