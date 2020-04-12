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
`;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Prices</SLink>
      </Item>
      <Item>
        <SLink to="/exchanges">Exchanges</SLink>
      </Item>
      <Item>
        <SLink to="/coins">Coins</SLink>
      </Item>
    </List>
  </Header>
);
