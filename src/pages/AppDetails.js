/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
import React, { useState, useRef } from 'react';
import {
  f7,
  Page,
  Navbar,
  Button,
  Link,
  Icon,
} from 'framework7-react';
import RatingStars from '../components/RatingStars';
import AppstoreBlockTitle from '../components/AppstoreBlockTitle';
import { apps, games } from '../js/data';

import './AppDetails.less';

function getAppById(id) {
  return [...apps, ...games].find((app) => app.id === parseInt(id, 10));
}

const AppDetails = ({ id, backText }) => {
  const app = getAppById(id);
  const pb = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const ratingVotes = {
    5: 500,
    4: 100,
    3: 80,
    2: 50,
    1: 200,
  };

  const totalVotes = Object.values(ratingVotes).reduce((acc, current) => acc + current);

  function pageInit() {
    pb.current = f7.photoBrowser.create({
      photos: [...app.screenshots],
      toolbar: false,
      navbarShowCount: false,
    });
  }
  function pageDestroy() {
    if (pb.current) pb.current.destroy();
  }
  function openPhotoBrowser(index) {
    if (!pb.current) return;
    pb.current.open(index);
  }

  function createAppDescription() {
    return {
      __html: (app.description || '').replace(/\n/g, '<br>'),
    };
  }

  return (
    <Page onPageInit={pageInit} onPageBeforeRemove={pageDestroy}>
      <Navbar
        transparent
        backLink={backText || 'Back'}
      />
      <div className="block app-header">
        <img src={app.icon} alt={app.title} className="app-header-icon" />
        <div className="app-header-content">
          <div className="app-header-title">{app.title}</div>
          <div className="app-header-subtitle">{app.subtitle}</div>
          <div className="app-header-actions">
            <Button external target="_blank" href={`https://apps.apple.com/app/id${app.id}`} round fill>GET</Button>
            <Link iconF7="square_arrow_up" />
          </div>
          <div className="app-header-ratings">
            <div className="app-header-rating">
              <div className="app-header-rating-value">{app.rating}</div>
              <RatingStars rating={app.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="block app-screenshots">
        {app.screenshots.map((screenshot, index) => (
          <img
            onClick={() => openPhotoBrowser(index)}
            src={screenshot}
            key={index}
            alt="Screenshot"
          />
        ))}
      </div>
      <div className={`block app-description ${showFullDescription ? 'app-description-full' : ''}`}>
        <div className="app-description-content">
          <div className="app-description-text" dangerouslySetInnerHTML={createAppDescription()} />
          <Link onClick={() => setShowFullDescription(true)}>more</Link>
        </div>
      </div>
      <AppstoreBlockTitle title="Ratings & Reviews">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <div className="block app-ratings">
        <div className="app-ratings-number">
          <b>{app.rating}</b>
          <span>out of 5</span>
        </div>
        <div className="app-ratings-votes">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div className="app-ratings-votes-row" key={rating}>
              <div className="app-ratings-votes-stars">
                {Array.from({ length: rating }).map((el, index) => (
                  <Icon key={index} f7="star_fill" />
                ))}
              </div>
              <div className="app-ratings-votes-progress">
                <span style={{ width: `${(ratingVotes[rating] / totalVotes) * 100}%` }} />
              </div>
            </div>
          ))}
          <div className="app-ratings-votes-total">
            {totalVotes}
            Ratings
          </div>
        </div>
      </div>
      <div className="block app-reviews">
        <div className="app-review">
          <div className="app-review-header">
            <span><b>John</b></span>
            <span>2y ago</span>
          </div>
          <div className="app-review-header">
            <RatingStars rating={5} />
            <span>johndoe</span>
          </div>
          <div className="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
        <div className="app-review">
          <div className="app-review-header">
            <span><b>John</b></span>
            <span>2y ago</span>
          </div>
          <div className="app-review-header">
            <RatingStars rating={5} />
            <span>johndoe</span>
          </div>
          <div className="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
        <div className="app-review">
          <div className="app-review-header">
            <span><b>John</b></span>
            <span>2y ago</span>
          </div>
          <div className="app-review-header">
            <RatingStars rating={5} />
            <span>johndoe</span>
          </div>
          <div className="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
        <div className="app-review">
          <div className="app-review-header">
            <span><b>John</b></span>
            <span>2y ago</span>
          </div>
          <div className="app-review-header">
            <RatingStars rating={5} />
            <span>johndoe</span>
          </div>
          <div className="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
        <div className="app-review">
          <div className="app-review-header">
            <span><b>John</b></span>
            <span>2y ago</span>
          </div>
          <div className="app-review-header">
            <RatingStars rating={5} />
            <span>johndoe</span>
          </div>
          <div className="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
      </div>
    </Page>
  );
};

export default AppDetails;
