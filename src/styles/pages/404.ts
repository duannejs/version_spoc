import styled from 'styled-components';

export const MainContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary);
  background-image: url("/images/login_background.png");
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyContainer = styled.div`
  background-color: #FFF;
  min-width: 400px;
  min-height: 120px;
  border-radius: var(--border-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const EmptyTitle = styled.h1`
  font-weight: 650;
  font-size: 18px;
  margin: 24px 0 16px;
  text-align: center;
  color: var(--text-title);
`;