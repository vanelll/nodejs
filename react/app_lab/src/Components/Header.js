import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


//style-components: local
const Header = styled.header`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-left: -35px;
  margin-right: 80px;
  text-transform: uppercase;
  font-weight: 700;
  list-style-type: none;
`;

const SLink = styled(Link)``;

export default () => (
    <Header>
    <List>
      <Item>
        <SLink to="/">🏷</SLink>
        </Item>
      <Item>
        <SLink to="/exchanges">🔁</SLink>
        </Item>
      <Item>
        <SLink to="/coins">💰</SLink>
        </Item>
    </List>
  </Header>
);

/**
 * https://reacttraining.com/react-router/web/example/url-params
 * link
 */
