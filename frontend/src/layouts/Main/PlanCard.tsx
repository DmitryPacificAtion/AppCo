import React, { FC } from 'react';
const basic = require('../../../assets/plan-card-basic.jpg');
const standard = require('../../../assets/plan-card-standard.jpg');
const unlimited = require('../../../assets/plan-card-unlimited.jpg');
import './PlanCard.scss'
import Paper from '../../components/Paper';
import Button from '../../components/Button';

type PlanCard = 'basic' | 'standard' | 'unlimited';

interface IProps {
  type: string;
  title: string;
  // description: string;
  price: number;
}

const PlanCard: FC<IProps> = ({type, title, price}) => {
  let img;
 if(type as keyof PlanCard) {
   if(type === 'basic') {
    img = basic
   }
   if(type === 'standard') {
    img = standard
   }
   if(type === 'unlimited') {
    img = unlimited
   }
 } else {
   console.error('Incorrect key for type PlanCard')
 }
 
  return (
    <Paper className="plan-card">
      <h2 className="plan-card__title">{title}</h2>
      <img src={img} alt={type} className="plan-card__preview"/>
      <div className="plan-card__price">${price}</div>
      <p className="plan-card__description">
        Push Notifications<br/>
        Data Transfer<br/>
        SQL Database<br/>
        Search & SEO Analytics<br/>
        24/7 Phone Support<br/>
        2 months technical support<br/>
        2+ profitable keyword<br/>
      </p>
      <Button className="plan-card__button" type="button" dark>Purchase now</Button>
    </Paper>
  )
}

export default PlanCard;
