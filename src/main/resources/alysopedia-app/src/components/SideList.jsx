import React from 'react';
import Collapsible from 'react-collapsible';

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
}
];


const SideList = () =>  {
    let indexCat = [];
    let indexSub = [];
    let listItems;

    for (let i = 0; i < data.length; i++) {

        indexCat[i] = data[i].category;

        indexSub[i] = data[i].subcategory;

        listItems = indexCat.map((indexCat, i) =>
        <>
            <Collapsible trigger={indexCat} className="Category-main" >
                <Collapsible trigger={indexSub[i]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
            </Collapsible>
        </>
        );
        console.log(listItems[i])

    }
    

    console.log(listItems[0])
    console.log(listItems[1])

    // const subListItems = indexSub.map((indexSub) =>
    //     <>
    //         <Collapsible trigger={indexSub} className="Category-sub" >
    //             <p>This is the collapsible content.</p>
    //         </Collapsible>
    //     </>
    // );




    console.log(listItems)
    return (        
        <div>{listItems}</div>
    )
}

export default SideList;