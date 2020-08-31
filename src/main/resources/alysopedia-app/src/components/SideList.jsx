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

let wiki = [{
    "title" : "Test",
    "category" : "Sub 1",
    "subcategory" : "Sub 1",
    "author" : "Chris",
    "body" : "Following the decisive victory of the markdown documents, the cloud reigned surpeme, culling the non-cloud folk... it was bad, mon"
}, 
{
    "title" : "Test2",
    "category" : "Cat 2",
    "subcategory" : "Sub 4",
    "author" : "Chris",
    "body" : "Following the decisive victory of the markdown documents, the cloud reigned surpeme, culling the non-cloud folk... it was bad, mon"
}, 
{
    "title" : "Test3",
    "category" : "Cat 2",
    "subcategory" : "Sub 5",
    "author" : "Chris",
    "body" : "Following the decisive victory of the markdown documents, the cloud reigned surpeme, culling the non-cloud folk... it was bad, mon"
}
]


const ListFiller = (list, sublist) => {
    let wikiCat;
    let wikiSub;
    let wikiTitle;
    wiki.forEach(element => {
        wikiCat = element.category.split(',')[0]
        wikiSub = element.category.split(',')[1]
        wikiTitle = element.title;
        console.log(wikiSub)

        if (wikiCat == list && sublist) {
            return(
                wikiTitle
            )
        }
        
    });
}





const SideList = () =>  {
    let indexCat = [];
    let indexSub = [];
    let listItems;
    let subListItems;

    for (let i = 0; i < data.length; i++) {
        indexCat[i] = data[i].category;
        indexSub[i] = data[i].subcategory.split(',');
    }

    listItems = indexCat.map((indexCat, i) =>
        <>
            <Collapsible trigger={indexCat} className="Category-main" >
                <Collapsible trigger={indexSub[i][0]} className="Category-sub" >
                    <p>{ListFiller(indexCat, indexSub[i][0])}</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][1]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][2]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][3]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][4]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][5]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][6]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
                <Collapsible trigger={indexSub[i][7]} className="Category-sub" >
                    <p>This is the collapsible content.</p>
                </Collapsible>
            </Collapsible>
        </>
        );

    return (        
        <div>{listItems}</div>
    )
}

export default SideList;