import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../store/types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MainContainer,
  LoginContainer,
  LoginTitle,
  LeftContainer,
  StyledToastContainer,
} from '../styles/pages/login';
import { LogoContainer } from '../components/LogoContainer';
import { ConfirmButton } from '../components/ConfirmButton';
import { TextInput } from '../components/TextInput';
import { useTranslation } from 'react-i18next';
import { LanguageOptions } from '../components/LanguageOptions';
import { SessionUser } from '../store/ducks/user/actions';

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    user: { user, loading, error },
  } = useSelector((state: AppStore) => state);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let hasSessionTimer: any;
    if (user?.token) {
      toast('Você já está logado');
      hasSessionTimer = setTimeout(() => {
        router.push('/');
      }, 1000);
    }
    if (error) {
      toast('Falha no login');
    }

    return () => clearTimeout(hasSessionTimer);
  }, [user, error, router]);

  const handleLogin = () => {
    if (email && password) {
      dispatch(SessionUser(email, password));
    } else {
      toast('Preencha as informações corretamente!');
    }
  };

  return (
    <MainContainer>
      <LeftContainer
        style={{ backgroundImage: `url("/images/login_background.png")` }}
      >
        <LogoContainer color={'#FFF'} />
      </LeftContainer>
      <LoginContainer>
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}
        >
          <LanguageOptions />
        </div>
        <div style={{ width: '30vw' }}>
          <LoginTitle>{t('login_title')}</LoginTitle>
          <TextInput
            value={email}
            setChangeText={setEmail}
            placeholder={t('Email')}
          />
          <TextInput
            value={password}
            setChangeText={setPassword}
            placeholder={t('password')}
            type={'password'}
          />
          <ConfirmButton
            loading={loading}
            onClick={handleLogin}
            title={t('Log in')}
          />
        </div>
        <div style={{ height: 96 }} />
      </LoginContainer>
      <StyledToastContainer
        toastStyle={{
          backgroundColor: user?.token ? 'var(--primary)' : '#FF2424',
          color: 'white',
        }}
        hideProgressBar
      />
    </MainContainer>
  );
};

export default Login;
