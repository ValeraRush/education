function sumCheck(a, b) {
    try {
        if ((Number(a) && Number(b)) &&
            (isNaN(a) && isNaN(b)) &&
            (a === 0 && b === 0) ||
            (typeof a !== 'string' && typeof b !== 'string') &&
            (typeof a !== 'object' && typeof b !== 'object') &&
            (typeof a !== 'boolean'&& typeof b !== 'boolean')){
            return a + b
        }

    } catch (error) {

    }
    throw new Error('Wrong arguments type!')
}
window.sumCheck = sumCheck;
export default sumCheck;
