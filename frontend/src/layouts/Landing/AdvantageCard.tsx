import React, { FC } from 'react';
const design = require('../../../assets/advantage-card-design-img.png');
const retina = require('../../../assets/advantage-card-retina-img.png');
const security = require('../../../assets/advantage-card-security-img.png');
import './AdvantageCard.scss'
import Paper from '../../components/Paper';

type AdvantageCardType = 'design' | 'retina' | 'security';

interface IProps {
  type: string;
  title: string;
  description: string;
}

const AdvantageCard: FC<IProps> = ({type, title, description}) => {
  let img;
 if(type as keyof AdvantageCardType) {
   if(type === 'design') {
    img = design
   }
   if(type === 'retina') {
    img = retina
   }
   if(type === 'security') {
    img = security
   }
 } else {
   console.error('Incorrect key for type AdvantageCardType')
 }
 
  return (
    <Paper className="advantage-card">
      <img src={img} alt={type} className="advantage-card__preview"/>
      <h2 className="advantage-card__title">{title}</h2>
      <p className="advantage-card__description">{description}</p>
    </Paper>
  )
}

export default AdvantageCard;
