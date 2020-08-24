import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`

`;

const Backdrop= styled.div``;

const Content= styled.div``;

const Cover= styled.div``;

const Data= styled.div`
  width: 70%;
`;

const Title= styled.span``;

const ItemContainer= styled.div``;

const Item= styled.span``;

const Divider= styled.span``;

const Overview= styled.p``;

const DetailPresenter = ({ result, loading, error }) => 
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
       <Cover />
        <Data>
          <Title>
            {result.original_title ? result.original_title :
              result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date? result.release_date 
                : result.first_air_date}
            </Item>
            <Divider>
              ∙
            </Divider>
            <Item>
              {result.runtime ? result.runtime :
                result.episode_run_time[0]} min
            </Item>
            <Divider>
              ∙
            </Divider>
            <Item>
              {result.genres && result.map((genre,index) =>
                index === result.genres.length -1 ?
                  genre.name : `${genre.name} /`)}
            </Item>
          </ItemContainer>
          <Overview>
            {result.overview}
          </Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;