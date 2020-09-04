import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./caraousel.scss";

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
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 5.5,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        arrows: false,
                        slidesToShow: 2.5,
                        slidesToScroll: 1
                    }
                }
            ]
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