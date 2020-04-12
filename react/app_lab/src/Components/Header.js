import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-top: 20px;
  margin-right: 30px;
  text-transform: uppercase;
  font-weight: 700;
  list-style-type: none;
  border-bottom: 3.5px solid
    ${props => (props.current ? "#F38EA6" : "transparent")};
`;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item current={true}>
        <SLink to="/">Prices</SLink>
      </Item>
      <Item current={false}>
        <SLink to="/exchanges">Exchanges</SLink>
      </Item>
      <Item current={false}>
        <SLink to="/coins">Coins</SLink>
      </Item>
    </List>
  </Header>
);
