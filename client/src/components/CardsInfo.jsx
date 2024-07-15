import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function CardsInfo(props) {
  const [dateAdd, setDateAdd] = useState(null);
  const [urlInfo, setUrlInfo] = useState(null);
  

  useEffect(() => {
    if (props.data) {
      setDateAdd(props.data.date_added);
      setUrlInfo(props.data.site_detail_url);
    }
  }, [props.data]);

  let cardContent;

  switch (props.endPoint) {
    case 'issues':
      cardContent = (
        <Card className='custom-card-info'>
          <Card.Body>
          <Card.Link href={urlInfo}  style={{ textDecoration: 'none' }}>
            <Card.Title>Fecha: {dateAdd}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Número: {props.data.issue_number}</Card.Subtitle>
            <Card.Text>
              Volumen : {props.data.volume.name || 'No description available.'}
            </Card.Text>
            Más información</Card.Link>
          </Card.Body>
        </Card>
      );
      break;

    case 'characters':
      cardContent = (
        <Card className='custom-card-info'>
          <Card.Body>
            <Card.Title>Nombre: {props.data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Alias: {props.data.aliases}</Card.Subtitle>
            <Card.Text>
             Primera aparición: {props.data.first_appeared_in_issue.name || 'No description available.'}
            </Card.Text>
            <Card.Link href={urlInfo}>Más información</Card.Link>
          </Card.Body>
        </Card>
      );
      break;

    case 'creators':
      cardContent = (
        <Card className='custom-card-info'>
          <Card.Body>
            <Card.Title>Nombre: {props.data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Descripción:</Card.Subtitle>
            <Card.Text>
              {props.data.deck || 'No description available.'}
            </Card.Text>
            <Card.Link href={urlInfo}>Más información</Card.Link>
          </Card.Body>
        </Card>
      );
      break;

    default:
      cardContent = (
        <Card className='custom-card-info'>
          <Card.Body>
            <Card.Title>Información no disponible</Card.Title>
            <Card.Text>
              No hay datos para mostrar.
            </Card.Text>
          </Card.Body>
        </Card>
      );
      break;
  }

  return cardContent;
}

export default CardsInfo;
