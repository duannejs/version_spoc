import styled, { css, createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --primary: #3399FF;
    --secondary: #FB2F2F;
    --background: #F3F3F3;
    --text-title: #0b0b0b;
    --text: #1b1b1b;
    --description: #888;
    --placeholder: #AAA;
    --border-card: 5px;
  }
`

interface LoadingBarProps {
    loading: boolean | number
  }
  
  export const LoadingBar = styled.div<LoadingBarProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    top: ${props => (props.loading ? 0 : -4)}px;
    right: 0;
    z-index: 2;
    background-color: var(--primary);
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      width: 128px;
      height: 2px;
      left: 0;
      top: 0;
      background: var(--secondary);
      ${props =>
        props.loading &&
        css`
          animation: routeLoading 2s infinite;
        `}
    }
    @keyframes routeLoading {
      0% {
        left: 0;
      }
      50% {
        left: calc(100% - 128px);
      }
      100% {
        left: 0;
      }
    }
  `