import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  /* .toast-container */
   /* .toast is passed to toastClassName */
  .toast {
  
  }
  .Toastify__progress-bar {
    background-color: none;
  }
  button[aria-label="close"] {
    display: none;
  }
  /* .body is passed to bodyClassName */
  .body {}
  /* .progress is passed to progressClassName */
  .progress {
    background-color: red;
  }
`;

export const MainContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  padding: 0px;
`;

export const LeftContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary);
  width: 30vw;
  min-width: 360px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

export const LoginContainer = styled.div`
  background-color: #fff;
  width: 70vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 48px;
  text-align: center;
  justify-content: space-between;
`;

export const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  margin: 48px 0;
  color: var(--text-title);
`;
