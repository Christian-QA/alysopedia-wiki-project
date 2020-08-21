import React from 'react';

// intended to be used for search results / landing page
const WikiCard = () => {

    return (
        <div className="card">
            <div class="card-body">
                <h5 class="card-title">Wiki title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text">Catagory tags</p>
            </div>
        </div>
    );
}

export default WikiCard;