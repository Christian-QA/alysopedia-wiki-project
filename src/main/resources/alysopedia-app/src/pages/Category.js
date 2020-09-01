import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.svg';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import axios from 'axios';

let selected = "Cael Theocracy"

const selection = () => {
    
    return(
        <Navigation category={selected}/>
    );
}

const Category = () => {

    const CategoryCall = (props) =>  {
        
        let configGet = {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000' },
            responseType: 'json'
        };
        
        const[returnedTitles, setReturnedTitles] = useState([]);
        var titleArray = [];

        useEffect(()=>{
            axios.get(`http://localhost:8181/readWikiByCategory/${props.category}`, configGet).then(response => {
            
                for (let i = 0; i < response.data.length; i++) {
                    titleArray[i] = response.data[i].title
                }
                console.log(Array.from(titleArray));
                
                setReturnedTitles( titleArray.map((titleArray, i) => 
                    <React.Fragment key={titleArray}>
                        {<p style={{width:250 + 'px'}}>{titleArray}</p>}
                    </React.Fragment>
                )
                )
                console.log(returnedTitles[0]); // works
                console.log(titleArray[0]);
                    
            })
            .catch(function (error) {
                console.log(error);
            });
        }, [])
        return (
            <div>
                <p>huvhujkv</p>
                <>
                    {returnedTitles}
                </>
            </div>
        );
    }

    return(
        <>
            <div className="Category">
                {selection()}
                
                <div style={{marginLeft:250 + 'px'}}>
                    <p>{selected}</p>
                    <CategoryCall category={selected}/>
                    <Footer />
                </div>
                
            </div>
        </>
        
    );
}

export default Category;