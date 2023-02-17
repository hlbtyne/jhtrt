import React from "react"
import styled from "styled-components"

import { RichText } from "../RichText"

export const TrusteesContainer = styled.div`
  @media (min-width: 950px) {
    display: flex;
    flex-wrap: wrap;
  }
  margin: 50px auto;
  padding: 0 20px;
`

export const Trustee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 8px auto 30px;
  padding: 40px 20px;
  background-color: rgba(194, 176, 145, 0.2);
  border-radius: 10px;
  @media (min-width: 950px) {
    margin: 8px 20px 30px 20px;
    width: 450px;
  }
`

export const TrusteeSection = ({ trusteesData }) => {
  const trustees = trusteesData.map(trustee => (
    <Trustee>
      <div>
        <RichText content={trustee.trustee_name[0]} />
      </div>
      {trustee.trustee_info ? (
        <div>
          <RichText content={trustee.trustee_info[0]} />
        </div>
      ) : null}
    </Trustee>
  ))

  return <TrusteesContainer>{trustees}</TrusteesContainer>
}

export default TrusteeSection
