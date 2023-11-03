import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, onAddToCart }) => {
    const { title, imageUrl, price } = product;

    return (
        <Card hoverable>
            <div className={styles.image__wrapper}>
                <img alt={title} src={imageUrl} className={styles.image} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.bottom}>
                <p>
                    Цена: <span>{price} &#8381;</span>
                </p>

                <Button
                    icon={
                        <ShoppingCartOutlined className={styles.cart__icon} />
                    }
                    onClick={() => onAddToCart(product)}
                />
            </div>
        </Card>
    );
};

export default ProductCard;
