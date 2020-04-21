import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import './Paper.scss';

interface IProps extends React.AllHTMLAttributes<ReactNode> {
  shadow?: boolean;
}

const Paper: FC<IProps> = props => {
  const {shadow = false} = props;
  const cx = classnames(props.className, 'paper', {
    shadow,
  })
  return <div {...props} className={cx}>{props.children}</div>
}

export default Paper;
