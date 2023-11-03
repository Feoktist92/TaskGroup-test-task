import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import styles from './LoginPage.module.scss';

const LoginPage = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleLogin = (values) => {
        const { username, password } = values;
        if (username === '9999999999' && password === 'password') {
            setIsAuthenticated(true);
            navigate('/products');
        } else {
            message.error('Неправильный логин или пароль');
        }
    };

    const handleFormChange = (_, allValues) => {
        const { username, password } = allValues;
        const isUsernameFilled = !!username;
        const isPasswordFilled = !!password;
        const isSubmitDisabled = !(isUsernameFilled && isPasswordFilled);
        setIsSubmitDisabled(isSubmitDisabled);
    };

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Sneakers Shop</h1>
            <Form
                className={styles.form}
                form={form}
                onFinish={handleLogin}
                onValuesChange={handleFormChange}
            >
                <Form.Item
                    name='username'
                    label='Логин'
                    rules={[{ required: true, message: 'Введите логин' }]}
                >
                    <InputMask mask='9999999999' maskChar='' alwaysShowMask>
                        {(inputProps) => (
                            <Input
                                {...inputProps}
                                allowClear
                                addonBefore='+7'
                                placeholder='(___) ____-____'
                            />
                        )}
                    </InputMask>
                </Form.Item>
                <Form.Item
                    name='password'
                    label='Пароль'
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className={styles.button__wrapper}>
                    <Button
                        className={styles.button}
                        type='primary'
                        htmlType='submit'
                        disabled={isSubmitDisabled}
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
