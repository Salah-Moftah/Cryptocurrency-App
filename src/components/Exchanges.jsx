import React from "react";
import { Row, Typography } from "antd";

//ToDo Exchanges (Commin Soon)
const Exchanges = () => {
  return (
    <Row gutter={[32, 32]} className="exchanges-card-container">
      <img src='/coming-soon.png' alt="Coming Soon" className="exchanges-image" />
      <Typography.Title level={1} className="exchanges-heading">
        Coming Soon
      </Typography.Title>
    </Row>
  );
};

export default Exchanges;