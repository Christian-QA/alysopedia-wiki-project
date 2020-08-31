import React from 'react';
import logo from '../images/logo.svg';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CategoryCall from '../components/CategoryCall';


let selected = "Efsedgbdrfthtyjhnfguj"

const Category = () => {
    return(
        <>
            <div className="Category">
                <Navigation category={selected}/>
                
                <div style={{marginLeft:250 + 'px'}}>
                    <p>{selected}</p>

                    <Footer />
                </div>
                <CategoryCall category={selected}/>
            </div>
        </>
    );
}
export default Category;