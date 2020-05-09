import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  display: flex;
  justify-content: center;
  
  ${getButtonStyles}
`
export const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`
export const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    position: absolute;
    top: 255px;
    width: 80%;    
    opacity: 0.7;

    &:hover {
      background-color: black;
      color: white;
      border: none;
      opacity: 0.85;
      display: flex;

      .image {
        opacity: 0.8;
      }
    }
`