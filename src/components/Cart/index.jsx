import React from 'react';
import { List, Button, Space } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './Cart.module.scss';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Корзина</h2>
            <List
                dataSource={cart}
                renderItem={(item) => (
                    <List.Item>
                        <Space className={styles.item}>
                            <div className={styles.item__title}>
                                {item.title}
                            </div>
                            <div className={styles.counter}>
                                <Button
                                    type='text'
                                    icon={<MinusOutlined />}
                                    onClick={() => decreaseQuantity(item)}
                                />
                                {item.quantity}
                                <Button
                                    type='text'
                                    icon={<PlusOutlined />}
                                    onClick={() => increaseQuantity(item)}
                                />
                            </div>
                            <span>{item.price * item.quantity} &#8381;</span>
                            <Button
                                className={styles.delete}
                                type='danger'
                                icon={<DeleteOutlined />}
                                onClick={() => removeFromCart(item)}
                            ></Button>
                        </Space>
                    </List.Item>
                )}
            />
            <div className={styles.total}>
                <p>
                    Итого: <b>{calculateTotal()} &#8381;</b>
                </p>
            </div>
        </div>
    );
};

export default Cart;
