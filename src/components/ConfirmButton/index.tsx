import React from 'react';
import { ButtonContainer, ButtonText } from './styles';
import { useTranslation } from 'react-i18next';

interface IConfirmButton {
  title?: string;
  onClick?: () => void;
  loading?: boolean;
}

export const ConfirmButton = ({
  title = 'BUTTON',
  loading,
  onClick,
}: IConfirmButton) => {
  const { t } = useTranslation();
  return (
    <ButtonContainer
      style={{ margin: '16px 0' }}
      type="primary"
      loading={loading}
      onClick={onClick}
    >
      {loading ? t('loading') : title}
    </ButtonContainer>
    // <ButtonContainer onClick={onClick}>
    //   <ButtonText>{title}</ButtonText>
    // </ButtonContainer>
  );
};
