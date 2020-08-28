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
    "title": "Nat 3",
    "category": "Cat 4",
    "author": "Chris",
    "body": "waesfserg"
}];





function removeDuplicates(array, key) {
    let lookup = new Set();
    return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
}



const SideList = (props) => {   
    console.log(removeDuplicates(data, 'category'))
    return (   
        <div className="shopping-list">
            <ul>
              <li>{props.name}</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }
    

export default SideList;