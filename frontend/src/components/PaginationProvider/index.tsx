import React, { ReactHTMLElement } from 'react';
import './PaginationProvider.scss';
import ControlItem from './ControlItem';

interface IProps {
  data: any[];
  Component: React.FC<any>;
}
interface IState {
  activePageId: number;
  visibleRows: number;
  prevFrom: number;
  totalPages: number;
}

function paginationProvider(args: IProps) {
  const { data = [], Component } = args;
  return class extends React.Component<{}, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        activePageId: 1,
        visibleRows: 15,
        prevFrom: 0,
        totalPages: Math.ceil(data.length / 16),
      };
    }
    render() {
      const { activePageId, totalPages, prevFrom, visibleRows} = this.state;
      const handleNextPage = () => {
       const { activePageId, totalPages } = this.state;
        if(activePageId < totalPages)
        this.setState({
          activePageId: activePageId + 1,
          prevFrom: prevFrom + visibleRows,
        });
      };

      const handlePrevPage = () => {
        const { activePageId } = this.state;
        if( activePageId > 0) {
          this.setState({
            activePageId: activePageId - 1,
            prevFrom: prevFrom - visibleRows
          })
        }
      };

      const newData: any[] = data.slice(prevFrom, prevFrom + visibleRows);
      
      const pagination = [];
      for (var i = 1; i <= totalPages; i++) {
        const onClick = (id: number) => {
          this.setState({
            activePageId: id,
            prevFrom: id * visibleRows - visibleRows,
          });
        };

        pagination.push(
          <ControlItem
            key={i}
            handleClick={onClick}
            isActive={i === activePageId}
            id={i}
          >
            {i}
          </ControlItem>
        );
      }
      return (
        <section>
          <Component {...this.props} data={newData} />
          <div className="pagination-provider__wrapper">
            <ControlItem handleClick={handlePrevPage} isPrev isActive={activePageId > 1}/>
            {pagination}
            <ControlItem handleClick={handleNextPage} isNext isActive={activePageId < totalPages}/>
          </div>
        </section>
      );
    }
  };
}

export default paginationProvider;
