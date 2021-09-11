import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonContainer = styled(Button)`
  height: 64px;
  border-radius: var(--border-card);
  margin: 16px 0;
  width: 100%;
`;

export const ButtonText = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
