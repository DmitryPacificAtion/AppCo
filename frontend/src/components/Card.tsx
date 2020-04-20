import React, { FC } from 'react';
const design = require('../../assets/card-design-img.png');
const retina = require('../../assets/card-retina-img.png');
const security = require('../../assets/card-security-img.png');

type CardImageType = 'design' | 'retina' | 'security';

interface IProps {
  type: string;
  title: string;
  description: string;
}

const Card: FC<IProps> = ({type, title, description}) => {
  return (
    <figure className="card">
      <img src={type} alt={type} className="preview"/>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </figure>
  )
}

export default Card;
