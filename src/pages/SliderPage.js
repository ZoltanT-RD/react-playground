import React from 'react';
import Cara from '../components/caraousel3';

function SliderPage() {

    const elements= [
        <img src={"https://placekitten.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/g/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/g/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/g/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placekitten.com/g/200/300"} className="kitten" alt="kittens" />
    ]
    return (
        <div className="slider">
            <Cara elements={elements} />
        </div>
    );
}

export default SliderPage;
