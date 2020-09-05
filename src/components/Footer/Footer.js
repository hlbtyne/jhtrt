import React from "react";
import styled from 'styled-components';
import Link from "gatsby-link";

export const FooterOuter = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 250px;
  background-color: #db5c1a;
  padding: 30px;
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  border: solid 1px white;
  color: white;
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: left;
    margin: 25px auto 0;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 2.2;
  color: white;
`;

const FooterLink = styled(Link)`
  color: white;
`;

export const Links = () => (
  <List>
    <ListItem>
      <FooterLink to="/">
          Home
      </FooterLink>
    </ListItem>
    <ListItem>
      <FooterLink to="/about">
          About
      </FooterLink>
    </ListItem>
    <ListItem>
      <FooterLink to="/trustees">
          Trustees
      </FooterLink>
    </ListItem>
    <ListItem>
      <FooterLink to="/legacy">
          Legacy
      </FooterLink>
    </ListItem>
    <ListItem>
      <FooterLink to="/submissions">
          Submissions
      </FooterLink>
    </ListItem>
    <ListItem>
      <FooterLink to="/contact">
          Contact
      </FooterLink>
    </ListItem>
  </List>
)


export const Footer = () => {
  return (
    <FooterOuter>
        <Links />
        <LogoContainer>
          JHTRT
        </LogoContainer>
    </FooterOuter>
  );
};

export default Footer;
