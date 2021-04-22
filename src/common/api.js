import { message as msg } from 'antd'
import { path2url } from 'common/util'

const isDev = process.env.NODE_ENV !== 'production'
const defaultHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
}

let redirected = false

const request = (path, params, headers = {}, method = 'POST') => {
    let { url } = path2url(path)
    const pairs = Object.entries(params).filter(([k, v]) => v !== null && v !== undefined) // 去除值为 null、undefined 的入参
    let body = pairs.length ? pairs.reduce((formdata, [k, v]) => (formdata.append(k, v), formdata), new URLSearchParams()) : null

    if (headers['Content-Type'] === 'application/json') {
        body = JSON.stringify(params)
    }

    const opts = {
        method,
        body,
        credentials: 'same-origin',
        headers: {
            ...defaultHeaders,
            ...headers
        }
    }

    return fetch(url, opts)
        .then(resp => resp.text().then(text => [text, resp.status]))
        .then(([text, status]) => {
            try {
                return JSON.parse(text.replace(/,[^{,]+:null|[^{,]+:null,/g, ''))
            } catch (e) {
                throw status
            }
        })
        .then(({ flag, data, message }) => {
            if (flag !== 1) {
                throw message
            } else {
                return data
            }
        })
        .catch(err => {
            if ((err === 401 || err === 'LOGOVERTIME') && !redirected) {
                redirected = true
                window.location.href = isDev ? '/dev_login' : `api/cms/tologin?originPage=${window.encodeURI(window.location.href)}`
            } else {
                msg.error(`${err.message || err}`)
                console.error(`👉${err.message || err}👈`)
                throw err // !!!抛出异常，使 saga fail
            }
        })
}

export default request