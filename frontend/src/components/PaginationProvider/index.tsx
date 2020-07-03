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
      const handleChangeActivePage = (index: number) => {
        // const hasActive = e.currentTarget.querySelectorAll('.active');
        console.log('hasActive', index);

        // Object.values<HTMLElement>(hasActive)
        //   .filter(
        //     (el) =>
        //       !(
        //         el.classList.contains('pagination-provider__page--next') ||
        //         el.classList.contains('pagination-provider__page--prev')
        //       )
        //   )
        //   .forEach((el) => el.classList.toggle('active'));
        // console.log('e.target !== e.currentTarget', e.target !== e.currentTarget);

        // if (e.target !== e.currentTarget) {
        //   e.target.classList.toggle('active');
        // }
      };

      const { prevFrom, visibleRows } = this.state;
      const newData: any[] = data.slice(0, prevFrom + visibleRows);
      const pagination = [];
      for (var i = 1; i <= this.state.totalPages; i++) {
        const onClick = (id: number) => {
          this.setState({
            activePageId: id,
          });
        };

        pagination.push(
          <ControlItem
            key={i}
            handleClick={onClick}
            id={i}
            isActive={i === this.state.activePageId}
          >
            {i}
          </ControlItem>
        );
      }
      return (
        <section>
          <Component {...this.props} data={newData} />
          <div className="pagination-provider__wrapper">
            <ControlItem isPrev handleClick={() => {}} />
            {pagination}
            <ControlItem handleClick={() => {}} isNext isActive />
          </div>
        </section>
      );
    }
  };
}

export default paginationProvider;
