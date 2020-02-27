import React from 'react';

import Gif from './gif';

const GifList = ({ gifs, clickedGifFunction }) => {
  let index = 0;
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => {
        index += 1;
        return <Gif id={id} key={id} clickedGifFunction={clickedGifFunction} tabindex={index} />;
      })}
    </div>
  );
}

export default GifList;
