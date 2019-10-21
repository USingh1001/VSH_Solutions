import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

import SearchForm from "./components/SearchForm/SearchForm";
import WebSeriesListContainer from "./components/WebSeriesListContainer/WebSeriesListContainer";


class App extends Component {
  render() {
    return (
      <Container className="containerBox">
        <Row>
          <Col xs={12}>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="listContainer">
            <h1>List of Web Series</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <WebSeriesListContainer />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
