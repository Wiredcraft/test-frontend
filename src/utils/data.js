import http from './axios'

const token = localStorage.getItem('token')

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
export const getAllPhotos = (token) => {
  if (!token) token = localStorage.getItem('token')
  try {
		return http.get('/photos')
	} catch (err) {
		console.error(err)
	}
}