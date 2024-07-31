import React, {useState} from 'react';
import { Pagination } from 'antd';

const PaginationMy = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);}
  return (
    <div>
<Pagination current={current} onChange={onChange} total={50} />
    </div>
  )
}

export default PaginationMy