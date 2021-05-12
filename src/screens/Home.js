import React from 'react';
import { Button } from 'antd';
import { PauseOutlined } from '@ant-design/icons';
import colors from '../utils/colors';
import styles from './Home.module.css';

function Home() {
  const iconStyle = {
    color: `${colors.default}`,
    fontSize: '3em',
  };

  const buttonStyle = {
    backgroundColor: colors.primary,
    border: '4px solid red',
    width: '85%',
    maxWidth: 300,
    height: '40%',
    margin: 'auto',
    fontSize: '6em',
    cursor: 'auto',
  };

  return (
    <div className={styles.Container}>
      <Button type="primary" shape="circle" style={buttonStyle}>
        <span style={{ display: 'inline', verticalAlign: 'super' }}>0:00</span>
      </Button>

      <div
        style={{
          backgroundColor: colors.secondary,
          width: 140,
          margin: 'auto',
          padding: '5px 0px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <PauseOutlined style={iconStyle} />
        <div className={styles.StopIcon}>&nbsp;</div>
      </div>

      <Button type="primary" shape="circle" style={buttonStyle}>
        <span style={{ display: 'inline', verticalAlign: 'super' }}>0:00</span>
      </Button>
    </div>
  );
}

export default Home;
