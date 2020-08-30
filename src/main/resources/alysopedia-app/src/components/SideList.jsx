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
    "category": "Cat 1, Sub 2",
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
},
{
    "title": "Nat 4",
    "category": "Cat 4, Sub 4",
    "subcategory": "Sub 4",
    "author": "Chris",
    "body": "waesfserg"
}];


function removeDuplicates(array) {
    array = array.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
    .filter(function(item, index, array){ return array.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
    .reverse().map(JSON.parse) // revert it to original state
    return array;
}

const SideList = () =>  {
    let indexSplit = [];
    for (let i = 0; i < data.length; i++) {
        indexSplit[i] = data[i].category.split(',')
        
        console.log(indexSplit[i][0]);
        console.log(indexSplit[i][1]);

    }
    console.log(indexSplit)

    let indexSplitFinal = removeDuplicates(indexSplit)

    console.log(indexSplitFinal)

    
    const subListItems = indexSplitFinal.map((indexSplitFinal) =>
        <>
            <Collapsible trigger={indexSplitFinal[1]} className="Category-sub" >
                <p>This is the collapsible content.</p>
            </Collapsible>
        </>
    );

    const listItems = indexSplitFinal.map((indexSplitFinal) =>
        <>
            <Collapsible trigger={indexSplitFinal[0]} className="Category-main" >
                    { subListItems }
            </Collapsible>
        </>
    );


    
    console.log(subListItems.toString())
    return (        
        <div>{listItems}</div>
    )
}

export default SideList;