import React from 'react';
import { Button, Block } from './components'
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import './styles/index.scss';

function App() {
  return (
    <div className='wrapper'>
      <section className="auth">
        <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form className="login-form">
            <Form.Item>
              <Input
                id="email"
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }}  />}
                size="large"
                placeholder="E-Mail"
              />
            </Form.Item>
            <Form.Item>
              <Input
                id="password"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                type="password"
                placeholder="Пароль"/>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
              >
                Войти в аккаунт
              </Button>
            </Form.Item>
            <a className="auth__register-link" href='#'>
              Зарегистрироваться
            </a>
          </Form>
        </Block>
        </div>
      </section>
    </div>
  );
}

export default App;
