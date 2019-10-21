import React from "react";
import {ListGroup, Image} from 'react-bootstrap';
import "./WebSeries.css";

const WebSeries = ({name, avatar, email}) => (
    <ListGroup.Item>
        <figure>
            <Image src= {avatar} alt="X No Image Found"/> 
        <figcaption>
            <p>{name}</p>
            <p>{email}</p>
        </figcaption>
        </figure>
    </ListGroup.Item>
)
export default WebSeries;