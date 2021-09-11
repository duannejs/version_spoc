/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../store/types';
import { useRouter } from 'next/router';
import { Layout, Button, Table } from 'antd';
import { VTHeader } from '../components/Header';
import { useTranslation } from 'react-i18next';
import { GetLicences, CancelLicence } from '../store/ducks/licences/actions';
import { FormatterCpfCnjp } from '../utils/formatters';
import { SideBar } from '../components/SideBar';

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    user: { user },
    licences: { data: licences, loading },
  } = useSelector((state: AppStore) => state);

  useEffect(() => {
    if (!user?.token) {
      router.push('/login');
    } else {
      dispatch(GetLicences());
    }
  }, [user, router, dispatch]);

  const columns = [
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Versão ADM',
      dataIndex: 'versaoAdm',
      key: 'versaoAdm',
    },
    {
      title: 'Versão PDV',
      dataIndex: 'versaoPdv',
      key: 'versaoPdv',
    },
    {
      title: 'Licenças',
      dataIndex: 'expira',
      key: 'expira',
    },
    {
      title: 'Opções',
      dataIndex: 'opcoes',
      key: 'opcoes',
      render: (text: any, row: any) => (
        <Button
          danger
          onClick={() => dispatch(CancelLicence(row.company_id, row.numero))}
        >
          {t('cancel_license')}
        </Button>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i <= licences.length; i++) {
    data.push({
      ...licences[i],
      cnpj: FormatterCpfCnjp({ num: licences[i]?.cnpj }),
      expira: `${parseInt(licences[i]?.expira)} dias` || '-',
    });
  }

  return (
    <Layout>
      <VTHeader />

      <Layout style={{  minHeight: '90vh' }}>
        <SideBar />
        <div style={{margin: 48, width: '78vw'}}>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          size={'small'}
          scroll={{ y: '64vh' }}
          pagination={{
            defaultPageSize: 15,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '30'],
          }}
          sticky
        /></div>
      </Layout>
    </Layout>
  );
};

export default Home;
