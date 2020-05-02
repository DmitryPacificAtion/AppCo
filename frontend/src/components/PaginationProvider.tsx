import React, {FC} from 'react';
interface IProps {
  component: React.FC | React.PureComponent | React.Component;
}
const PaginationProvider: FC<IProps> = ({ component }) => {
  const Component = component;
  return (
    <div className="pagination-provider__wrapper">
      <Component />
    </div>
  )
}

export default PaginationProvider;