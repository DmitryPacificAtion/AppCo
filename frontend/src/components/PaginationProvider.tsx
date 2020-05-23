import React, {FC} from 'react';
interface IProps {
  Component: React.FC | React.PureComponent | React.Component;
}

const PaginationProvider: FC = () => {
  return (
    <div className="pagination-provider__wrapper">
     Hello
    </div>
  )
}

export default PaginationProvider;