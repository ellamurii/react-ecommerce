const products = require('./database.json');

function getRandomInRange (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = () => {
    const data = {
        products: products.map((item) => ({
            ...item,
            date: new Date(Date.now() - getRandomInRange(1, 1000 * 3600 * 24 * 15)).toString()
        }))
    };

    return data;
}
