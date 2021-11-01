import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((responce) => {
        this.setState({ posts: responce.data });
      })
      .catch();
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <div>{item.body}</div>
              <div>{item.id}</div>
            </div>
          );
        })}
      </>
    );
  }
}
export default App;
