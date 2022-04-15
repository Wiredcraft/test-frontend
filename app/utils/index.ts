export const stringify = function (obj: { [key: string]: string | number }) {
    return Object.entries(obj)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join('&');
}