import React, { memo } from 'react';
import s from './Button.module.css';

export const Button = memo(({ size, color, block, link }) => {
  const styleButton = {
    colorBtn:
      (color === 'danger' && s.btn__danger) ||
      (color === 'success' && s.btn__success),
    sizeBtn: size === 'big' && s.btn__big,
    blockBtn: block === true && s.btn__block,
  };
  return (
    <>
      <button
        className={[
          s.btn,
          styleButton.colorBtn,
          styleButton.sizeBtn,
          styleButton.blockBtn,
        ].join(' ')}
      >
        {link ? 'Ссылка' : 'Кнопка'}
      </button>
    </>
  );
});
