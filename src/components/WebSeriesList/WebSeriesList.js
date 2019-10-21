import React from 'react';
import {ListGroup} from 'react-bootstrap';
import WebSeries from "../WebSeries/WebSeries";

const WebSeriesList = ({ webSeriesList, loading }) => {
    var list = "";
    if(loading === false && webSeriesList.length !== 0){
        list = webSeriesList.map((item, index) => <WebSeries key={index} {...item}/>)
    }else if(loading === true){
        list = <p>Loading...</p>
    }else{
        list = <p>Please, modify your search</p>;
    }
    return(
        <ListGroup>
            {list}
        </ListGroup>
    )
}


export default WebSeriesList;