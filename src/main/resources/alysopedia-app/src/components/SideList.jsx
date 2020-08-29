import React from 'react';

let data = [{
    "title": "Nat 1",
    "category": "Cat 1",
    "author": "Chris",
    "body": "fghdhyjd"
},
{
    "title": "Nat 2",
    "category": "Cat 2",
    "author": "Chris",
    "body": "dght"
},
{
    "title": "Nat 3",
    "category": "Cat 3",
    "author": "Chris",
    "body": "waesfserg"
},
{
    "title": "Nat 4",
    "category": "Cat 3",
    "author": "Chris",
    "body": "waesfserg"
}];


function removeDuplicates(array, key) {
    let lookup = new Set();
    array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
    return Array.from(lookup);
}

const SideList = () =>  {
    const indexItems = removeDuplicates(data, 'category');
    const listItems = indexItems.map((indexItems) =>
        <li>{indexItems}</li>
    );

    console.log(indexItems)
    console.log(listItems)
    return (
        <ul>{listItems}</ul>
    )
}
    
export default SideList;