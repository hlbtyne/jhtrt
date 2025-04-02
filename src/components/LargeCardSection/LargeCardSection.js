import React from "react"
import styled from "styled-components"
import { RichText } from "../RichText"

export const LargeCardSectionContainer = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: ${props => (props.wrap ? "row" : "column")};
    justify-content: start;
    margin: 30px auto 40px;
  }
  @media (min-width: 900px) {
    margin: 30px auto;
    max-width: 800px;
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 30px 0;
`

export const LargeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media (min-width: 950px) {
    margin: ${props => (props.wrap ? "0 15px" : "8px 0 40px")};
  }
  @media (min-width: 600px) {
    margin: ${props => (props.wrap ? "0 15px" : "0 auto 30px")};
    width: ${props => (props.wrap ? "50%" : null)};
  }
  margin: 0 0 20px;
  padding: 40px 20px;
  background-color: ${props =>
    props.orange ? "white" : "rgba(194,176,145,0.2)"};
  border: ${props => (props.orange ? "solid 3px #db5c1a" : null)};
  border-radius: 10px;
`

export const LargeCardImageContainer = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  margin: 0 0 10px;
  padding-bottom: 100%;
  background: gray;
`
export const StyledLargeCardImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardContent = styled.div`
  max-height: ${props => (props.wrap ? "null" : "250px")};
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

export const LargeCardSection = ({ cards, orange, wrap }) => {
  return (
    <LargeCardSectionContainer wrap={wrap}>
      {cards.map(
        card =>
         (
            <LargeCard orange={orange} wrap={wrap}>
              {card.card_image && (
                <LargeCardImageContainer>
                  <StyledLargeCardImage src={card.card_image.url} />
                </LargeCardImageContainer>
              )}
              {card.video_url_large && (
                <StyledVideo
                  width="100%"
                  height="400px"
                  src={card.video_url_large}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              )}
              <CardContent wrap={wrap}>
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
                {card.large_card_text &&
                  card.large_card_text.length &&
                  card.large_card_text.map(para => <RichText content={para} />)}
              </CardContent>
            </LargeCard>
          )
      )}
    </LargeCardSectionContainer>
  )
}

export default LargeCardSection
