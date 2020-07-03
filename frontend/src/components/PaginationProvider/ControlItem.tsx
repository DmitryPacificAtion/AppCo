import React, { FC } from 'react';
import './PaginationProvider.scss';
import classnames from 'classnames';

interface IProps {
  isActive?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
  id?: number;
  handleClick: (e: any) => void;
}

const ControlItem: FC<IProps> = (props) => {
  const { children, isNext = false, isPrev = false, isActive = false, handleClick, id } = props;
  if (isNext || isPrev) {
    const csControl = classnames('pagination-provider__page', {
      'pagination-provider__page--next': isNext && !isPrev,
      'pagination-provider__page--prev': isPrev && !isNext,
      active: isActive,
    });
    return <div className={csControl} onClick={handleClick} />;
  }
  const csPage = classnames('pagination-provider__page', {
    active: isActive,
  });
  return <div className={csPage} onClick={() => handleClick(id)}>{children}</div>;
};

export default ControlItem;
