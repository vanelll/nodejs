import React from "react";
import {Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header= styled.header`
    color: powderblue;
    position :fixed;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    `;

const List= styled.ul`
    display:flex;
`;

const Item=styled.li`
    border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};

`;

const SLink=styled(Link)``;

export default withRouter(({location: {pathname}})=> ( 
    <Header>
        <List>
        <Item current={pathname ==="/"}>
            <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname ==="/tv"}>
            <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname ==="/search"}>
            <SLink to="/search">Search</SLink>
        </Item>
        </List>
    </Header>
));