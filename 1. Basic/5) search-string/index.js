function searchString(obj) {
    let text = '?'
    let mass = []
    if (!!Object.keys(obj).length) {
        for (let elem in obj) {
            if (obj[elem] !== null && typeof obj[elem] !== 'undefined' && obj[elem] !== '') {
                mass.push(elem + '=' + obj[elem])
            }
        }
        return text += mass.join('&')
    }else {
        return ''
    }
}
window.searchString = searchString;

export default searchString;
