import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../store/types';
import { useRouter } from 'next/router';
import { MainContainer, EmptyContainer, EmptyTitle } from '../styles/pages/404';
import { LogoContainer } from '../components/LogoContainer';
import { ConfirmButton } from '../components/ConfirmButton';
import { useTranslation } from 'react-i18next';

const Empty404 = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    user: { user },
  } = useSelector((state: AppStore) => state);

  return (
    <MainContainer>
      <EmptyContainer>
        <div style={{ alignSelf: 'center' }}>
          <LogoContainer />
        </div>
        <EmptyTitle>{t('page_not_found')}</EmptyTitle>
        <ConfirmButton title={t('back')} onClick={() => router.push('/')} />
      </EmptyContainer>
    </MainContainer>
  );
};

export default Empty404;
