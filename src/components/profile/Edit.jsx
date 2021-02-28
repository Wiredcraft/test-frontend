import React, { useState, useEffect, useCallback } from 'react'
import { withRouter } from 'react-router'
import { useDropzone } from 'react-dropzone'
// import { uploadPhoto } from '../../../utils/data'

const Edit = (props) => {

	const [pageData, setPageData] = useState({
		fileSrc: null
	})

	useEffect(() => {
	
	}, [])

	const onDrop = useCallback(acceptedFiles => {
		const reader = new FileReader()
		reader.onload = () => {
			const res = reader.result
      console.log('RESULT', res)
			setPageData(prevState => ({
				...prevState,
				fileSrc: res
			}))
		}
		if (acceptedFiles[0]) {
			reader.readAsDataURL(acceptedFiles[0])	
		}
	}, [])

	const handleFileUpload = () => {

	}

	const {getRootProps, getInputProps } = useDropzone({onDrop})

	const handleRegister = (e) => {
		e.preventDefault()
		const name = document.getElementById('name')
		const surname = document.getElementById('surname')
		const country = document.getElementById('country')
		const city = document.getElementById('city')
		const brand = document.getElementById('brand')
		const hotel = document.getElementById('hotel')
	  if (name.value, surname.value, country.value, city.value, brand.value) {
			const data = {
				name: name.value,
				surname: surname.value,
				country: country.value,
				city: city.value,
				brand: brand.value,
				hotel: hotel.value
			}
		}
		if (pageData.uploadedFile) {
			// handleFileUpload()
		}
		props.history.push('/profile')
	}

	const validateForm = () => {
    
	}

	return (
		<div className="form">  
      <div className="form-field">
        <img src={pageData.fileSrc || '/avatar.png'} className="form-field__uploader" {...getRootProps()}/>
        <input type="file"  accept="image/*" name="image" id="file" style={{ display: 'none' }} {...getInputProps()} />
      </div>
      <div className="form-field">
        <label htmlFor="password">
          Name
        </label>
        <input id="name" name="name" className={`form-field__input`} type="text"></input>
      </div>
      <button type="button" onClick={validateForm}>Update</button>
    </div>
	);
}

export default withRouter(Edit)