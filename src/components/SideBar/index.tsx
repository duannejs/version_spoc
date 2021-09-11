import React from 'react';
import { Menu, Layout } from 'antd';
import {
  FilePdfOutlined,
  SortAscendingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
const { Sider } = Layout;

import { LogoutButton, LogoutButtonText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AppStore } from '../../store/types';
import { FormatterCpfCnjp } from '../../utils/formatters';
import { useRouter } from 'next/router';

const { Item } = Menu;

export const SideBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    licences: { data: licences, loading },
  } = useSelector((state: AppStore) => state);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleLogout = () => dispatch({ type: 'LOGOUT_USER' });

  const data: any = [];
  for (let i = 0; i <= licences.length; i++) {
    data.push({
      ...licences[i],
      cnpj: FormatterCpfCnjp({ num: licences[i]?.cnpj }),
      expira: `${parseInt(licences[i]?.expira)} dias` || '-',
    });
  }

  const handleExportPDF = async () => {
    console.log('Gerando PDF...');
    const doc: any = new jsPDF();
    

    doc.autoTable({
      head: [['Nome', 'CNPJ', 'Versão ADM', 'Versão PDV', 'Expira']],
      body: data.map(({ nome, cnpj, expira, versaoAdm, versaoPdv }: any) => {
        return [nome, cnpj, versaoAdm, versaoPdv, expira];
      }),
    });

    doc.save('versoes.pdf');
  };

  const menuOptions = [
    {
      key: 1,
      title: t('Dashboard'),
      Icon: DashboardOutlined,
      onPress: () => router.push('/'),
    },
    {
      key: 2,
      title: t('Export'),
      Icon: FilePdfOutlined,
      onPress: handleExportPDF,
    },
    {
      key: 3,
      title: t('Document Names'),
      Icon: SortAscendingOutlined,
      onPress: () =>
        openInNewTab('https://drive.google.com/drive/u/1/my-drive'),
    },
    {
      key: 4,
      title: t('Help'),
      Icon: QuestionCircleOutlined,
      onPress: () =>
        openInNewTab('https://api.whatsapp.com/send?phone=5511982029872'),
    },
    {
      key: 5,
      title: t('Settings'),
      Icon: SettingOutlined,
      onPress: () => router.push('/settings'),
    },
  ];
  return (
    <Sider width={228} className="site-layout-background">
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Menu
          style={{ width: 230, backgroundColor: 'transparent' }}
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['sub1']}
          selectable={false}
          mode="vertical"
        >
          {menuOptions.map((item, index) => (
            <Item
              key={index}
              icon={<item.Icon style={{ fontSize: 20, marginRight: 12 }} />}
              onClick={item.onPress}
            >
              {item.title}
            </Item>
          ))}
        </Menu>
        <LogoutButton onClick={handleLogout}>
          <LogoutOutlined
            style={{ color: 'var(--secondary)', fontSize: 20, marginRight: 12 }}
          />
          <LogoutButtonText>{t('logout')}</LogoutButtonText>
        </LogoutButton>
      </div>
    </Sider>
  );
};
