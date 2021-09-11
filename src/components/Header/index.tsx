import React from 'react';

import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { LogoContainer } from '../LogoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../store/types';
const { Header } = Layout;
import { PhotoContainer, InitialName } from './styles';
import { LanguageOptions } from '../LanguageOptions';

export const VTHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    user: { user },
  } = useSelector((state: AppStore) => state);

  const handleLogout = () => dispatch({ type: 'LOGOUT_USER' });

  const menu = (
    <Menu>
      <Menu.Item>
        <LanguageOptions />
      </Menu.Item>
      <Menu.Item onClick={handleLogout}>{t('logout')}</Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
      <LogoContainer />
      <PhotoContainer overlay={menu} placement="bottomRight">
        <InitialName>
          {user?.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </InitialName>
      </PhotoContainer>
    </Header>
  );
};
