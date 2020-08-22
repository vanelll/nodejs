import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container= styled.div``;

const ImageContainer= styled.div``;

const Image= styled.div``;

const Rating= styled.sapn``;

const Title= styled.span``;

const Year= styled.span``;

const Poster= ({imageUrl, title, rating, year}) =>
    <Container><ImageContainer>
        <Image bgUrl={imageUrl}/>
        <Rating>
            <span role="img" aria-label="rating">
                💖
            </span>
            {rating}/10
        </Rating>
    </ImageContainer></Container>

Poster.propTypes={
    id:PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    year: PropTypes.string
}


export default Poster;