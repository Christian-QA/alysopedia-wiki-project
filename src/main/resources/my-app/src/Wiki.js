import axios from 'axios';

let configGet = {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000' },
    responseType: 'json'
};

const searchWiki = () => {
    axios.get(`http://localhost:8181/findAllWiki`, configGet)
        .then(function (response) {
            let titleArr = response.data;
            console.log(response.data);

        })
        .catch(function (error) {
            console.log(error);
        });
}
