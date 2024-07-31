import React from 'react';
import { Col, Row } from 'antd';
import NewsItem from './NewsItem';

const NewsList = () => {
  return (
    
    <Row>
      <Col span={24}><NewsItem/></Col>
    </Row>
  )
}

export default NewsList