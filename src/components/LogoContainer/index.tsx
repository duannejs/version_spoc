import React from 'react';
import { MainContainer } from './styles';

interface ILogoContainer {
  width?: number;
  backgroundImage?: string;
  color?: string;
}

export const LogoContainer = ({
  width = 120,
  color = '#222',
  backgroundImage = `url("/images/logo.png")`,
}: ILogoContainer) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56
      }}
    >
      <MainContainer
        style={{
          backgroundImage,
          width,
        }}
      />
      <h1 style={{ fontWeight: 'bold', fontSize: 24, color, marginTop: 8 }}>P5 STATION</h1>
    </div>
  );
};
