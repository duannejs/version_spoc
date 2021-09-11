import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import {DropDownText} from './styles'

export const LanguageOptions = () => {
  const { i18n, t } = useTranslation();

  function handleMenuClick(e: any) {
    i18n.changeLanguage(e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="pt">
        Português (Brasil)
      </Menu.Item>
      <Menu.Item key="en">
        English
      </Menu.Item>
      <Menu.Item key="es">
        Español
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <DropDownText>
        {t('key_lang_description')} <DownOutlined />
      </DropDownText>
    </Dropdown>
  );
};
