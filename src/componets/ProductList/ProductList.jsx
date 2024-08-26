import React, { useEffect } from 'react';
import {useGetProductsQuery} from "../../store/API/slices/apiFakeStore.js";
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductList = () => {
    const {data: product, error, isLoading} = useGetProductsQuery()

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    return (
        <div>
            <Container>
                <Row>
                    {product.map(item => (
                        <Col key={item.id} xs={12} md={4} className="mb-4">
                            <Card className="h-100">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt={item.title}
                                    style={{ height: 'auto', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Card.Text><strong>Price:</strong> ${item.price}</Card.Text>
                                    <Card.Text><strong>Category:</strong> {item.category}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
