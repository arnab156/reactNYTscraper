import React, { Component } from "react";
import Container from '../../components/Container/Container';
import Card from '../../components/Card/card';
import ArticleScraped from '../../components/ArticleScraped/ArticleScraped';
import myAPI from "../../utils/api/API";

class SavedArticles extends Component {
  state = {
    savedArticles: []
  }

  componentDidMount() {
    this.getArticlesHandler();
  }

  getArticlesHandler() {
    myAPI.getArticles()
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err));
  }

  deleteArticleHandler = ( event, id ) => {
    myAPI.deleteArticle(id)
      .then(res => this.getArticlesHandler())
      .catch(err => console.log(err));
    }

  render() {

    let saved = <p>There are no articles saved!</p>

    if (this.state.savedArticles.length > 0) {
      saved = this.state.savedArticles.map((article, index) => {
        return <ArticleScraped
          key={article._id}
          articleId={article._id}
          headline={article.title}
          author={article.author}
          date={article.dateOfArticle}
          URL={article.URL}
          summary={article.summary}
          action={this.deleteArticleHandler}
          title="Remove from saved" />
      });
    }

    return (
      <Container>
        <Card title="Saved Articles">
         {saved}
        </Card>
      </Container>
    )
  }
}

export default SavedArticles;