import http from './axios'

const token = localStorage.getItem('token')

// add a photo to the DB
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

// pass userId and get all their liked images
export const getUserLikes = (id, token) => {
  if (!token) token = localStorage.getItem('token')
  try {
		return http.get('/likes', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        id
      }
    })
	} catch (err) {
		console.error(err)
	}
}

// pass id of like to delete it from the DB
export const removeLike = (id, token) => {
  if (!token) token = localStorage.getItem('token')
  try {
		return http.get('/unlike', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        id
      }
    })
	} catch (err) {
		console.error(err)
	}
}

export const addLike = (userId, imageSrc, token) => {
  if (!token) token = localStorage.getItem('token')
  try {
		http.post('/likes', {
			user: userId,
      image: imageSrc
		},{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
	} catch (err) {
		console.error(err)
	}
}