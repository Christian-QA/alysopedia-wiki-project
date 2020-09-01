import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.svg';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CategoryCall from '../components/CategoryCall';


let selected = 'Cael Theocracy';

const selection = () => {
    
    return(
        <Navigation category={selected}/>
    );
}


const Category = () => {
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