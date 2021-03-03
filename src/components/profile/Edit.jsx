import React, { useState, useRef, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useGlobalContext } from '../../store/global'

const Edit = () => {

  const { user, logout, updateProfile } = useGlobalContext()

	const [pageData, setPageData] = useState({
		fileSrc: null
	})

  const nameRef = useRef(null)

  // react-dropzone receives uploaded images files here
  // and updates pageData.fileSrc with the blobbed data
	const onDrop = useCallback(acceptedFiles => {
		const reader = new FileReader()
		reader.onload = () => {
			const res = reader.result
			setPageData(prevState => ({
				...prevState,
				fileSrc: res
			}))
		}
		if (acceptedFiles[0]) {
			reader.readAsDataURL(acceptedFiles[0])	
		}
	}, [getRootProps, getInputProps])

  // react-dropzone helpers
	const {getRootProps, getInputProps } = useDropzone({onDrop})

  // update users profile data in the DB
	const handleUpdate = (e) => {
		e.preventDefault()
    const name = nameRef.current
    const data = {
      id: user.id,
      name: name.value || user,
      avatar: pageData.fileSrc || null,
      prevAvatar: user.avatar
    }
    updateProfile(data)
	}

	return (
		<div className="form">  
      <div className="form-field">
        {/* If there's user data, we show their avatar, unless theyve uploaded a new one */}
        {user && user.avatar &&
          <img src={pageData.fileSrc || `https://d24tnhvewxeba9.cloudfront.net/${user.avatar}`} className="form-field__uploader" {...getRootProps()}/>
        }
        {/* Otherwise, we show the placeholder, until they upload something */}
        {(!user || !user.avatar) &&
          <img src={pageData.fileSrc || '/avatar.png'} className="form-field__uploader" {...getRootProps()}/>
        }
        <input type="file"  accept="image/*" name="image" id="file" style={{ display: 'none' }} {...getInputProps()} />
      </div>
      <div className="form-field">
        <label htmlFor="password">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={`form-field__input`}
          type="text"
          defaultValue={user && user.name ? user.name : '' }
          ref={nameRef}
        ></input>
      </div>
      <button type="button" onClick={handleUpdate}>Update</button>
      <div>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    </div>
	);
}

export default Edit