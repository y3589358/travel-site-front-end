import React from 'react';
import './Pagination.scss';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const Pagination: React.FC<PaginationProps> = (props) => {
  return <div className="pagination">
    <RcPagination {...props}/>
  </div>;
};

export default Pagination;
