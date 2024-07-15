import React,{useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

function Cards(props) {

    const [url, setUrl] = useState(null);
    const [name, setName]= useState(null);
    const [urlInfo, setUrlInfo] = useState(null);

    console.log(props.data);

    useEffect(
        ()=>{
            if(props.data){
                setUrl(props.data.image.small_url);
                setName(props.data.name);
                setUrlInfo(props.data.site_detail_url);
            }
        },[])
        
  return (
    <Card className='custom-card'>
      <Card.Link href={urlInfo} style={{ textDecoration: 'none', display: 'contents' }}>
      <Card.Img variant="top" src={url} className='custom-card-img' />
      <Card.Body>
        <Card.Title  className='custom-card-title'>{name}</Card.Title>
      </Card.Body>
      </Card.Link>  
    </Card>
  )
}

export default Cards