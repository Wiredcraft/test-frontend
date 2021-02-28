import http from './axios'

const token = localStorage.getItem('token')

// used to import json data into the db
export const importPhotos = (obj, token) => {
  try {
		http.post('/photo', {
			index: obj.index,
      name: obj.name,
      src: obj.src
		})
	} catch (err) {
		console.error(err)
	}
}

// search the database by name field on the photo
export const searchPhotos = (q, token) => {
  if (!token) token = localStorage.getItem('token')
  try {
		return http.get('/search', {
      params: {
        q
      }
		})
	} catch (err) {
		console.error(err)
	}
}

// get all photos from the database
export const getAllPhotos = (token) => {
  if (!token) token = localStorage.getItem('token')
  try {
		return http.get('/photos')
	} catch (err) {
		console.error(err)
	}
}