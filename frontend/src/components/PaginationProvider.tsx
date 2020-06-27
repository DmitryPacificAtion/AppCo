import React, {FC} from 'react';
import './PaginationProvider.scss';

// interface IProps {
//   Component: React.FC | React.PureComponent | React.Component;
// }

const PaginationProvider: FC = () => {
  return (
    <div className="pagination-provider__wrapper">
      <div className="pagination-provider__prev"></div>
      <div className="pagination-provider__page pagination-provider__page--active">1</div>
      <div className="pagination-provider__page">2</div>
      <div className="pagination-provider__page">3</div>
      <div className="pagination-provider__next pagination-provider__next--active"></div>
    </div>
  )
}

export default PaginationProvider;
