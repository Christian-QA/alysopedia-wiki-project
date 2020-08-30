import React from 'react';
import Collapsible from 'react-collapsible';

let data = [{
    "title": "Nat 1",
    "category": "Cat 1",
    "subcategory": "Sub 1",
    "author": "Chris",
    "body": "fghdhyjd"
},
{    
    "title": "Nat 1",
    "category": "Cat 1, Sub 1",
    "subcategory": "Sub 1",
    "author": "Chris",
    "body": "fghdhyjd"
},
{    
    "title": "Nat 1",
    "category": "Cat 1",
    "subcategory": "Sub 2",
    "author": "Chris",
    "body": "fghdhyjd"
},
{
    "title": "Nat 2",
    "category": "Cat 2",
    "subcategory": "Sub 1",
    "author": "Chris",
    "body": "dght"
},
{    
    "title": "Nat 1",
    "category": "Cat 2",
    "subcategory": "Sub 2",
    "author": "Chris",
    "body": "fghdhyjd"
},
{
    "title": "Nat 3",
    "category": "Cat 3",
    "subcategory": "Sub 2",
    "author": "Chris",
    "body": "waesfserg"
},
{
    "title": "Nat 3",
    "category": "Cat 3",
    "subcategory": "Sub 3",
    "author": "Chris",
    "body": "waesfserg"
},
{
    "title": "Nat 4",
    "category": "Cat 3",
    "subcategory": "Sub 2",
    "author": "Chris",
    "body": "waesfserg"
}];




function removeDuplicatesCat(array, keyOne) {
    let category = new Set();
    array.filter(obj => !category.has(obj[keyOne]) && category.add(obj[keyOne]));
    return Array.from(category);
}

const SideList = () =>  {
    let indexSplit = [];
    for (let i = 0; i < data.length; i++) {
        indexSplit[i] = data[i].category.split(',')
        console.log(indexSplit[i][0]);
        console.log(indexSplit[i][1]);
    }


    

    const indexCat = removeDuplicatesCat(data, 'category');
    const indexSub = [];





    const listItems = indexCat.map((indexSplit) =>
        <>
            <Collapsible trigger={indexCat} className="Category-main" >
                <Collapsible trigger="gfd" className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
            </Collapsible>
        </>
    );

    console.log(indexCat)
    console.log(data.length)
    return (        
        <div>{listItems}</div>
    )
}

export default SideList;