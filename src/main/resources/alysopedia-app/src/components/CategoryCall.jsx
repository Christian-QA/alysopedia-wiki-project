import React from 'react';
import axios from 'axios';
import Gallery from 'react-grid-gallery';

const CategoryCall = (props) =>  {

    let configGet = {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000' },
        responseType: 'json'
    };
    
    
    var returnedTitles = [];
    var titleArray = [];
        axios.get(`http://localhost:8181/readWikiByCategory/${props.category}`, configGet).then(response => {
    
        for (let i = 0; i < response.data.length; i++) {
            titleArray[i] = response.data[i].title
        }
        console.log(Array.from(titleArray));
        
        returnedTitles = titleArray.map((titleArray) => 
            <React.Fragment key={titleArray}>
                {/* <p style={{width:250 + 'px'}}>{titleArray[i]}</p> */}
                 <p>fsergzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
             </React.Fragment>
        )
            
        console.log(returnedTitles[0]); // works
        console.log(titleArray[0]);
            
    })
    .catch(function (error) {
        console.log(error);
    });
    
    console.log(returnedTitles[0]); //undefined
    console.log(titleArray[0]);
    return (
        <div>
            <p>huvhujkv</p>
            <>
                {returnedTitles}
            </>
        </div>
    );
    

}

export default CategoryCall;