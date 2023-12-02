/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import classNames from 'classnames';

import './ImageSlider.scss';
import { getUniqueId } from '../../helpers/getFunctions/getUniqueld';

export const ImageSlider: React.FC = () => {
  const images = [
    './_new/img/banner-phones.png',
    './_new/img/banner-tablets.png',
    './_new/img/banner-accessories.png',
  ];

  const [index, setIndex] = useState(1);
  const [offsetX, setOffsetX] = useState(0);

  const updateSlide = (newOffsetX: number, newIndex: number) => {
    setOffsetX(newOffsetX);

    setIndex(newIndex);
  };

  const handlePrevBtn = () => {
    updateSlide(offsetX + 100, index - 1);
  };

  const handleNextBtn = () => {
    updateSlide(offsetX - 100, index + 1);
  };

  return (
    <section className="main__slider slider">
      <div className="container">
        <div className="slider__content">
          <button
            onClick={handlePrevBtn}
            className={classNames(
              'slider__btn',
              'button button--onTable-turnOn',
              { 'button--disable': index === 1 },
            )}
            disabled={index === 1}
          >
            <div className="icon icon__btn-prev" />
          </button>

          <div className="slider__slides">
            <ul
              className="slider__list"
              style={{
                transform: `translateX(${offsetX}%)`,
              }}
            >
              {
                images.map(image => (
                  <li
                    key={getUniqueId()}
                    className="slider__slide"
                  >
                    <img
                      src={image}
                      alt={image}
                      className="slider__img"
                    />
                  </li>
                ))
              }
            </ul>
          </div>

          <button
            className={classNames(
              'slider__btn',
              'button button--onTable-turnOn',
              { 'button--disable': index === 3 },
            )}
            onClick={handleNextBtn}
            disabled={index === 3}
          >
            <div
              className="
              icon
              icon__btn-prev
              icon__btn-prev--transform-scaleX"
            />
          </button>

          <div className="slider__points">
            <button
              onClick={() => updateSlide(0, 1)}
              className="slider__btn-point"
            >
              <div
                className={classNames(
                  'slider__point',
                  { 'slider__point--isActive': index === 1 },
                )}
              />
            </button>

            <button
              onClick={() => updateSlide(-100, 2)}
              className="slider__btn-point"
            >
              <div
                className={classNames(
                  'slider__point',
                  { 'slider__point--isActive': index === 2 },
                )}
              />
            </button>

            <button
              onClick={() => updateSlide(-200, 3)}
              className="slider__btn-point"
            >
              <div
                className={classNames(
                  'slider__point',
                  { 'slider__point--isActive': index === 3 },
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
