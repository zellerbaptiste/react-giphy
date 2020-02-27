import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const { id, clickedGifFunction, tabindex } = this.props;

    if (!id) {
      return null;
    }

    this.handleClick = () => {
      clickedGifFunction(id);
    };

    const src = `https://media0.giphy.com/media/${id}/200.webp`;

    return (
      <div onClick={this.handleClick} onKeyPress={this.handleClick} role="button" tabIndex={tabindex}>
        <img className="gif" alt="" src={src} />
      </div>
    );
  }
}

export default Gif;
