import React, { useState } from 'react';
import { Row, Col, Layout, Popover, Badge } from 'antd';
import { ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import Cart from '../../components/Cart';
import products from '../../data/products.json';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import styles from './ProductPage.module.scss';

const ProductPage = ({ setIsAuthenticated }) => {
    const [cart, setCart] = useState([]);
    const { Content, Header } = Layout;

    const handleAddToCart = (product) => {
        const updatedCart = [...cart];
        const itemIndex = updatedCart.findIndex(
            (item) => item.id === product.id
        );

        if (itemIndex !== -1) {
            updatedCart[itemIndex].quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCart(updatedCart);
    };

    const handleRemoveFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };

    const handleIncreaseQuantity = (product) => {
        const updatedCart = [...cart];
        const itemIndex = updatedCart.findIndex(
            (item) => item.id === product.id
        );

        if (itemIndex !== -1) {
            updatedCart[itemIndex].quantity += 1;
            setCart(updatedCart);
        }
    };

    const handleDecreaseQuantity = (product) => {
        const updatedCart = [...cart];
        const itemIndex = updatedCart.findIndex(
            (item) => item.id === product.id
        );

        if (itemIndex !== -1 && updatedCart[itemIndex].quantity > 1) {
            updatedCart[itemIndex].quantity -= 1;
            setCart(updatedCart);
        }
    };

    return (
        <Layout className={styles.root}>
            <Header className={styles.header}>
                <h1 className={styles.logo}>
                    <span>Sneakers Shop</span>
                    <img
                        src='./sneakers.png'
                        alt='logo'
                        className={styles.logo__img}
                    />
                </h1>
                <nav>
                    <Popover
                        content={
                            <Cart
                                cart={cart}
                                removeFromCart={handleRemoveFromCart}
                                increaseQuantity={handleIncreaseQuantity}
                                decreaseQuantity={handleDecreaseQuantity}
                            />
                        }
                        trigger='click'
                    >
                        <Badge
                            count={cart.reduce(
                                (total, item) => total + item.quantity,
                                0
                            )}
                            style={{
                                backgroundColor: '#52c41a',
                            }}
                        >
                            <ShoppingCartOutlined className={styles.cart} />
                        </Badge>
                    </Popover>
                    <Link
                        to='/'
                        className={styles.logout}
                        onClick={() => setIsAuthenticated(false)}
                    >
                        <LogoutOutlined />
                    </Link>
                </nav>
            </Header>
            <Content className={styles.content}>
                <div className={styles.content__wrapper}>
                    <h1 className={styles.content__title}>Каталог</h1>
                    <Row gutter={[16, 16]}>
                        {products.map((product) => (
                            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                                <ProductCard
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default ProductPage;
