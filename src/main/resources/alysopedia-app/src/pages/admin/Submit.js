import axios from 'axios';

const postWiki = () => {
    let name = document.getElementById("wikiName").value;
    let category = document.getElementById("wikiCategory").value;
    let body = document.getElementById("wikiBody").value;

    axios({
        method: 'post',
        url: 'http://localhost:8181/addWiki',
        data: `{
            "title" : "${name}",
            "category" : "${category}",
            "author" : "Chris",
            "body" : "${body}"
        }`,
        headers: {'Content-Type': 'application/json'} 
    })
    .then(function (response) {
          console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
