import React from 'react';
import { Button, Block } from '../../../components/'
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginForm = props => {
  return (
      <div>
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
            <Link className="auth__register-link" to='/signup'>Зарегистрироваться</Link>
          </Form>
        </Block>
      </div>
  )
}

export default LoginForm