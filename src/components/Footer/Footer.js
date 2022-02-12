import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import logo from "../../images/logo_vertical.png"

export const FooterOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 250px;
  background-color: #db5c1a;
  padding: 30px 30px 10px 30px;
`

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: left;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: left;
    margin: 25px auto 0;
  }
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 2.2;
`

export const Links = () => (
  <List>
    <ListItem>
      <Link to="/">Home</Link>
    </ListItem>
    <ListItem>
      <Link to="/about">About</Link>
    </ListItem>
    <ListItem>
      <Link to="/trustees">Trustees</Link>
    </ListItem>
    <ListItem>
      <Link to="/legacy">Legacy</Link>
    </ListItem>
    <ListItem>
      <Link to="/submissions">Submissions</Link>
    </ListItem>
    {/* <ListItem>
      <Link to="/submissions">
          Contact
      </Link>
    </ListItem> */}
  </List>
)

export const Footer = () => {
  return (
    <FooterOuter>
      <FooterFlex>
        <Links />
        <LogoContainer>
          <img src={logo} alt="logo" style={{ height: "150px" }} />
        </LogoContainer>
      </FooterFlex>
      The John Hodgson Theatre Research Trust is a Registered Charity in England
      & Wales No. 1080410
    </FooterOuter>
  )
}

export default Footer
