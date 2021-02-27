import http from './axios'

const token = process.env.ACCESS_KEY

export const searchPhotos = (query) => {
	try {
		return http.get(`/series/detail`, {
			headers: {
				'Authorization': `Client-ID ${token}`
			},
			params: {
				speakers
			}
		})
	} catch (err) {
		console.error(err)
	}
}