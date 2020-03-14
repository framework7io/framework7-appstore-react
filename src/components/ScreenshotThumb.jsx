/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';

const ScreenshotThumb = ({ src, onClick, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      style={{
        opacity: loaded ? 1 : 0,
        transitionDuration: '600ms',
      }}
      onLoad={() => setLoaded(true)}
      onClick={onClick}
      src={src}
      alt={alt}
    />
  );
};

export default ScreenshotThumb;
