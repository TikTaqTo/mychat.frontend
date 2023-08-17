import React from 'react';
import { Button, Block } from '../../../components'
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RegisterForm = props => {
  
  const success = false;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
      {!success ? (
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
              id="username"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }}  />}
              size="large" 
              placeholder="Ваше имя"
            />
          </Form.Item>
          <Form.Item>  
            <Input
              id="password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}  />}
              size="large" 
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>  
            <Input
              id="password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}  />}
              size="large" 
              placeholder="Повторите пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to='/signin'>Войти в аккаунт</Link>
          </Form>
          ) : (
            <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
            </p>
          </div>
          )}
      </Block>
    </div>
  )
}

export default RegisterForm