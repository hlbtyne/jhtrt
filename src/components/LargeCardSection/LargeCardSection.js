import React from "react"
import styled from "styled-components"
import { RichText } from "../RichText"

export const LargeCardSectionContainer = styled.div`
  @media (min-width: 600px) {
    margin: 30px auto;
  }
  @media (min-width: 900px) {
    margin: 30px auto;
    max-width: 800px;
  }
  margin: 30px 0;
`

export const LargeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto 30px;
  padding: 40px 20px;
  background-color: ${props =>
    props.orange ? "white" : "rgba(194,176,145,0.2)"};
  border: ${props => (props.orange ? "solid 3px #db5c1a" : null)};
  border-radius: 10px;
  @media (min-width: 950px) {
    margin: 8px 0 40px;
  }
`

export const CardContent = styled.div`
  max-height: 250px;
  overflow-y: auto;
`

export const Spacer = styled.div`
  height: 6px;
`

export const StyledVideo = styled.iframe`
  margin-top: 10px;
  margin-bottom: 20px;
  border: none;
`

export const LargeCardSection = ({ cards, orange }) => {
  return (
    <LargeCardSectionContainer>
      {cards.map(card => (
        <LargeCard orange={orange}>
          {card.video_url_large && (
            <StyledVideo
              width="100%"
              height="400px"
              src={card.video_url_large}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          )}
          <CardContent>
            {card.card_title && card.card_title.length > 0 ? (
              <>
                <RichText content={card.card_title[0]} />
                <Spacer />
              </>
            ) : null}

            {card.card_subheader && card.card_subheader.length > 0 ? (
              <>
                <RichText content={card.card_subheader[0]} />
                <Spacer />
              </>
            ) : null}
            {card.large_card_text.map(para => (
              <RichText content={para} />
            ))}
          </CardContent>
        </LargeCard>
      ))}
    </LargeCardSectionContainer>
  )
}

export default LargeCardSection
