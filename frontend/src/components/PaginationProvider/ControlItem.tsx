import React, { FC } from 'react';
import './PaginationProvider.scss';
import classnames from 'classnames';

interface IProps {
  isActive?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
}

const ControlItem: FC<IProps> = (props) => {
  const { children, isNext = false, isPrev = false, isActive = false } = props;
  if (isNext || isPrev) {
    const cx = classnames('pagination-provider__page', {
      'pagination-provider__page--next': isNext && !isPrev,
      'pagination-provider__page--prev': isPrev && !isNext,
    });
    return <input type="checkbox" name="pagination-controller" checked={isActive} className={cx} />;
  }
  return (
    <label className="pagination-provider__page">
      <input type="radio" name="pagination-controller" />
      {children}
    </label>
  );
};

export default ControlItem;
