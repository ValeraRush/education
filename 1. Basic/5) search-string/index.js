function searchString(obj) {
    let text = '?'
    const massJoin = []
    if (Object.keys(obj).length) {
        for (const elem in obj) {
            if (!!obj[elem] && obj[elem] !== '' || obj[elem] === false || obj[elem] === 0) {
                massJoin.push(elem + '=' + obj[elem])
            }
        }
        return text += massJoin.join('&')
    }
    return ''
}
window.searchString = searchString;
export default searchString;
