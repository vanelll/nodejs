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
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Prices</SLink>
        </Item>
        <Item current={pathname === "/exchanges"}>
          <SLink to="/exchanges">Exchanges</SLink>
        </Item>
        <Item current={pathname === "/coins"}>
          <SLink to="/coins">Coins</SLink>
        </Item>
      </List>
    </Header>
  ));
  
