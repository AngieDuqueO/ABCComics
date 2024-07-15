import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';
import CardsInfo from './CardsInfo';

function ListCards(props) {
    const [data, setData] = useState(null);


    useEffect(() => {
        if (props.info && props.info.results.length > 0) {
            setData(props.info.results);
        }
    }, [props.info]);

    return (
        <Container fluid="md">
            {data && data.map((item, index) => (
                <Row key={index}>
                    <Col sm={4}><Cards data={item} /></Col>
                    <Col sm={8}><CardsInfo data={item} endPoint={props.endPoint} /></Col>
                </Row>
            ))}
        </Container>
    );
}

export default ListCards;
