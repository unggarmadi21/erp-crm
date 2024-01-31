import React from 'react';
import { Layout, Row, Col } from 'antd';
export default function AuthLayout({ sideContent, children }) {
  return (
    <Layout>
      <Row>
        <Col
          xs={{ span: 0, order: 1 }}
          sm={{ span: 0, order: 1 }}
          md={{ span: 11, order: 1 }}
          lg={{ span: 12, order: 1 }}
          style={{
            minHeight: '1-0vh',
          }}
        >
          {sideContent}
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 13, order: 2 }}
          lg={{ span: 12, order: 2 }}
          style={{ background: '#FFF', minHeight: '100vh' }}
        >
          {children}
        </Col>
      </Row>
    </Layout>
  );
}
