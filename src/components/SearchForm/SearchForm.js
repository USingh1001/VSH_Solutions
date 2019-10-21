import React, {Component} from "react";
import {Form, Col} from "react-bootstrap";
import {connect} from 'react-redux';
import {searchWebSeries} from '../Actions/Action';

class SearchForm extends Component{
    handleInputChange = (event) =>{
        this.props.dispatch(searchWebSeries(event.target.value));
    }

    render(){
        return(
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Col xs={{ span: 6, offset: 6 }}>
                        <Form.Control className="Search-Form-Input" placeholder="Search Name.." onChange={this.handleInputChange}/>
                    </Col>
                </Form.Group>
            </Form>    
        )
    }
}

SearchForm = connect()(SearchForm);

export default SearchForm
