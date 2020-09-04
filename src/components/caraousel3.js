import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://react-slick.neostack.com/docs/example/multiple-items

import React, { Component } from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";

class caraousel3 extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div>
                <h2>final version slider</h2>
                <Slider {...settings}>
                    {this.props.elements.map((e) => (
                        <div>{e}</div>
                    ))}
                </Slider>
            </div>
        );
    }
}

caraousel3.defaultProps = {
    // id: "TitleBar"
};

caraousel3.propTypes = {
    id: PropTypes.string,
    elements: PropTypes.arrayOf(PropTypes.element)
};

export default caraousel3;