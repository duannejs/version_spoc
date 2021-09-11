import styled from 'styled-components';
import { Dropdown } from 'antd';

export const PhotoContainer = styled(Dropdown)`
  height: 42px;
  width: 42px;
  background-color: var(--primary);
  border-radius: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InitialName = styled.h4`
  font-weight: 600;
  display: flex;
  text-transform: uppercase;
  font-size: 18px;
  color: #fff;
  margin-top: 8px;
  text-align: center;
`;
