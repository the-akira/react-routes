import React from 'react';

class PostDetails extends React.Component {
  state = {
    id: null
  }	

  componentDidMount(){
    let id = this.props.match.params.id;
    this.setState({
      id: id
    })
  }
  render() {
    return (
      <div>
        <h1>Post Details - {this.state.id}</h1>
      </div>
    );
  }
}

export default PostDetails;