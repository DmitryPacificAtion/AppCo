import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './Button.scss';

interface IProps extends React.HTMLAttributes<ReactNode> {
  to?: string;
  type?: 'submit' | 'reset' | 'button';
  dark?: boolean;
}

const Button: FC<IProps> = props => {
  const { type = 'submit', to, className, dark = false } = props;
  const cx = classnames(className, 'button', dark ? 'button--dark' : 'button--light')

  if(to) {
    return (<Link {...props} to={to} className={cx}>{props.children}</Link>)
  } else {
    return (<button type={type} className={cx}>{props.children}</button>)
  }
}

export default Button;
