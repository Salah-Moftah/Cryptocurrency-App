import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";

import { Col, Row, Typography } from 'antd';
import millify from 'millify';

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = []
  const coinTimestamp = []
  
  for (let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
    coinPrice.push(coinHistory?.data?.history[i].price)
  }
  for (let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString('en-US'));
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      }
    ]
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  Chart.register(...registerables);

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {millify(currentPrice)}</Title>
        </Col>
      </Row>
      <Line data={data} options={options}/>
    </>
  )
}

export default LineChart
