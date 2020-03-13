import React from 'react';
import { Icon } from 'framework7-react';

const Rating = ({ rating }) => {
  function icon(n) {
    if (n <= Math.floor(rating)) return 'star_fill';
    if (n > Math.ceil(rating)) return 'star';
    return 'star_lefthalf_fill';
  }
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon key={n} f7={icon(n)} />
      ))}
    </div>
  );
};

export default Rating;
