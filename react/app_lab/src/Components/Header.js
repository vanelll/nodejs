import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul``;

const Item = styled.li``;

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
