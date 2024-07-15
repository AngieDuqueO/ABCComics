import React,{useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaList, FaTh } from 'react-icons/fa'; 
import GridCards from './GridCards';
import ListCards from './ListCards';
import axios from 'axios';

function FilterBar(props) {
    const [data, setData] = useState(null);
    const [optionBar, setOptionBar] = useState('grid');
    
    const handleSelect = (eventKey) => {
        setOptionBar(eventKey);
      };
    
      useEffect(() => {

        switch (props.listOptions) {
            case 'issues':
                
            axios.get('/api/issues')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error", error);
            });
                break;
            
            case 'characters':
                axios.get('/api/characters')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("Error", error);
                });
                break;
            
            case 'creators':

            axios.get('/api/people')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error", error);
            });
            break;

            default:
                break;
        }
        

      }, []);


  return (
    <>
    <Nav variant="tabs" activeKey={optionBar} defaultActiveKey="/home" className="custom-nav" onSelect={handleSelect}>
      <Nav.Item id='list' >
        <Nav.Link eventKey="list">
            <FaList className="custom-icon"></FaList>
        Lista
        </Nav.Link>
      </Nav.Item>
      <Nav.Item id='grid'>
        <Nav.Link eventKey="grid">
            <FaTh className="custom-icon"></FaTh>
            Grila
        </Nav.Link>
      </Nav.Item>
    </Nav>
    {optionBar === 'grid' ? (
        <GridCards info={data}/>
    ) :(
        <ListCards info={data} endPoint={props.listOptions}/>
    )}
    </>
  )
}

export default FilterBar