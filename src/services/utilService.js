
export default {
    storeToStorage,
    loadFromStorage,
    getRandomInt,
    makeId
}


function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value || null));
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function getRandomInt(num1, num2) {
    var max = (num1 >= num2)? num1 : num2;
    var min = (num1 <= num2)? num1 : num2;
    return (Math.floor(Math.random()*(max - min)) + min);
}

function makeId(length = 10) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var id = '';
    for (let i = 0; i < length; i++) {
        id += chars[this.getRandomInt(0, chars.length)];
    }
    return id;
}
