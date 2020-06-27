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
      const handleChangeActivePage = (e: any) => {
        const hasActive = e.currentTarget.querySelectorAll(
          '.active:not(.pagination-provider__page--next):not(.pagination-provider__page--prev)'
        );
        Object.values<HTMLElement>(hasActive).forEach(el => el.classList.toggle('active'));
        e.target.classList.toggle('active');
      };
      const { prevFrom, visibleRows } = this.state;
      const newData: any[] = data.slice(0, prevFrom + visibleRows);
      return (
        <section>
          <Component {...this.props} data={newData} />
          <div className="pagination-provider__wrapper" onClick={handleChangeActivePage}>
            <ControlItem isPrev />
            <ControlItem>1</ControlItem>
            <ControlItem>2</ControlItem>
            <ControlItem>3</ControlItem>
            <ControlItem isNext isActive/>
            {/* <div className="pagination-provider__page pagination-provider__page--prev"></div>
            <div className="pagination-provider__page active">1</div>
            <div className="pagination-provider__page">2</div>
            <div className="pagination-provider__page">3</div>
            <div className="pagination-provider__page pagination-provider__page--next active"></div> */}
          </div>
        </section>
      );
    }
  };
}

export default paginationProvider;
