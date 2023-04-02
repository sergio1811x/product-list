import React from 'react';
import s from './Item.module.css';
import { Button } from '../../button/Button';

export const Item = ({ image, name, brand, badge, button }) => {
  return (
    <div className={s.container}>
      <img src={image} alt={'image'} />
      <div>
        <h3>{brand}</h3>
        {badge && <span className={s.badge}>{badge}</span>}
      </div>
      <h4>{name}</h4>
      {button.link ? (
        <a href={button.link}>
          <Button {...button} />
        </a>
      ) : (
        <Button {...button} />
      )}
    </div>
  );
};
