function searchString(obj) {
    let text = '?'
    const Array = []
    if (Object.keys(obj).length) {
        for (const elem in obj) {
            if (!!obj[elem] && obj[elem] !== '' || obj[elem] === false || obj[elem] === 0) {
                Array.push(elem + '=' + obj[elem])
            }
        }
        return text += Array.join('&')
    }
    return ''
}
window.searchString = searchString;
export default searchString;
