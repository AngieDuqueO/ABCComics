import React,{useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';

function GridCards(props) {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        if (props.info && props.info.results.length > 0) {
            setData(props.info.results);
        }
    }, [props.info]);

    const renderRows = () => {
        if (!data) return null;

        const rows = data.reduce((acc, item, index) => {
            if (index % 2 === 0) {
                acc.push([]);
            }
            acc[acc.length - 1].push(item);
            return acc;
        }, []);

        return rows.map((row, rowIndex) => (
            <Row key={rowIndex}>
                {row.map((item, colIndex) => (
                    <Col xs={6} key={colIndex}><Cards data={item} /></Col>
                ))}
            </Row>
        ));
    };
    
  return (
    <Container>
        {renderRows()}
    </Container>
  )
}

export default GridCards