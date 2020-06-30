const axios = require('axios');
const defaults = require('./default');

const url = 'gifs/'

let gitResourse = {
    random() {
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'random' ,
            params: {
                api_key: '2TSvGluLJFTtEFjCLCRx8erFFUKqIWrT'
            }
        })
    },
    trending() {
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'trending' ,
            params: {
                api_key: '2TSvGluLJFTtEFjCLCRx8erFFUKqIWrT'
            }
        })

    },
    search(query) {

    },
    getById(id) {

    }
};

module.exports = gitResourse;
