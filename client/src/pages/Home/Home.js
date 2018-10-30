import React, { Component } from "react";
import SaveBtn from "../../components/saveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";


class Home extends Component {
  state = {
    articles: [],
    title: "",
    startYear: "",
    endYear: "",
    summary: "",
    url: "",
    date: "",
    saved: false
  };

  searchArticles = (input) => {
    API.search(input)
    .then(res => 
      this.setState({articles: res.data}))
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, url: "", summary: "", date: "",  })
      )
      .catch(err => console.log(err));
  };

  saveArticle = data => {
    API.saveArticle(data)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveArticle({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      
      <Container fluid>
     
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search</h1>
              <Input
               value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"></Input>
              <Input
               value={this.state.startYear}
                onChange={this.handleInputChange}
                name="start year"
                placeholder="start year"></Input>
              <Input
               value={this.state.endYear}
               onChange={this.handleInputChange}
               name="end year"
               placeholder="end year">
               </Input>
              <FormBtn  onClick={() => this.searchArticles()}>Search!</FormBtn>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1>Search Results</h1>
            
          
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/article/" + article._id}>
                      <strong> {article.article}</strong>
                      <p>{article.summary}</p>
                      <p>{article.date}</p>
                      <p>{article.url}</p>
        
                      
                    </Link>
                    <SaveBtn onClick={() => this.saveArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
         
          <Jumbotron>
          <h1>Saved Articles</h1>
            
          
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/article/" + article._id}>
                      <strong> {article.article}</strong>
                      <p>{article.summary}</p>
                      <p>{article.date}</p>
                      <p>{article.url}</p>
        
                      
                    </Link>
                    <SaveBtn onClick={() => this.saveArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
