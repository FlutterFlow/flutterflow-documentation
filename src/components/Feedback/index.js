import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

const Feedback = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        console.log(window.location.pathname.toString())

        if (window.gtag) {
            window.gtag('event', 'rating', {
                event_category: 'Feedback',
                event_label: window.location.pathname,
                value: rate,
            });
        }
    };

    return (
        <div style={{ textAlign: 'left', marginTop: '0vh' }}>
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={40}
                fillColor="orange"
                emptyColor="lightgray"
                transition
            />
            {/*<div style={{ marginTop: '20px', fontSize: '18px' }}>*/}
            {/*    Your Rating: {rating / 20} stars*/}
            {/*</div>*/}
        </div>
    );
};

export default Feedback;