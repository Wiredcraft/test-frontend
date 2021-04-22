import { isMock } from './config'

/**
 * 把 url.yml 里的路径，根据接口映射规则转换成完整请求路径
 * @param {String} p
 */
 export const path2url = (p = '') => {
    const [path, type = 'form'] = p.split('|').reverse()
    let url = null
    if (isMock) {
        url = `mock/${path}.json`
    } else {
        const [, transform] = API_RULES.filter(([regex, nil]) => regex.test(path))[0]
        url = `${transform(path)}`
    }
    return { url, type }
}