import React from 'react';
import Collapsible from 'react-collapsible';
import { NavLink } from 'react-router-dom';

let data = [{
    "category": "Cat 1",
    "subcategory": "Sub 1, Sub 2, Sub 3"
},
{
    "category": "Cat 2",
    "subcategory": "Sub 1, Sub 4, Sub 5"
},
{
    "category": "Cat 3",
    "subcategory": "Sub 1, Sub 4, Sub 5, Sub 6, Sub 7, Sub 99"
}];

let wiki = [{
    "title": "Yo come down to Cael",
    "category": "Cael Theocracy",
    "author": "Chris",
    "body": "Following the decisive victory of the markdown documents, the cloud reigned surpeme, culling the non-cloud folk... it was bad, mon"
},
{
    "title": "Very Sandy",
    "category": "Gyrico City-States",
    "author": "Chris",
    "body": "Following the decisive victory of the markdown documents, the cloud reigned surpeme, culling the non-cloud folk... it was bad, mon"
},
{
    "title": "Big Fish",
    "category": "Gyrico City-States",
    "author": "Chris",
    "body": "Following the decisive victory of the markdown documents, the cloud reigned surpeme, culling the non-cloud folk... it was bad, mon"
}]


const SideList = () =>  {
    let indexCat = [];
    let indexSub = [];

    for (let i = 0; i < data.length; i++) {
        indexCat[i] = data[i].category;
        indexSub[i] = data[i].subcategory.split(',');
    }

        return (  
            <>
                <Collapsible trigger="Nations and Races" className="Category-main" >
                    <Collapsible trigger="Humans" className="Category-sub" >
                        <NavLink className="w3-bar-item w3-button w3-padding" id='Cael Theocracy' to="/Category">Cael Theocracy</NavLink>
                        <h6 id='Gyrico City-States'>Gyrico City-States</h6>
                        <h6>Hydratopolan Hegemony</h6>
                        <h6>Regoterran Monarchy</h6>
                        <h6>Relicus Democracy</h6>
                        <h6>Starus Empire</h6>
                        <h6>Minor Nations</h6>
                    </Collapsible>
                    <Collapsible trigger="Elves" className="Category-sub" >
                        <h6>Childerdale Halidom</h6>
                    </Collapsible>
                    <Collapsible trigger="Dwarves" className="Category-sub" >
                        <h6>Dwarvern Kingdom</h6>
                    </Collapsible>
                    <Collapsible trigger="Bellua" className="Category-sub" >
                        <h6>Anojun Autocracy</h6>
                    </Collapsible>
                    <Collapsible trigger="Drisalisk" className="Category-sub" >
                        <h6>Anojun Autocracy</h6>
                    </Collapsible>
                    <Collapsible trigger="Corrans" className="Category-sub" >
                        <h6>Crytopolis</h6>
                    </Collapsible>
                </Collapsible>
                <Collapsible trigger="Organisations" className="Category-main" >
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                </Collapsible>
            </>
        );
}

export default SideList;