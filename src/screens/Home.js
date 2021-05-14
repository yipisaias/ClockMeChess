/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { CaretRightFilled, PauseOutlined } from '@ant-design/icons';
import Cronometro from '../components/Cronometro';
import colors from '../utils/colors';
import styles from './Home.module.css';

function Home() {
  const crono1Ref = useRef(null);
  const crono2Ref = useRef(null);
  const bp1 = useRef(null);
  const bp2 = useRef(null);
  const [cronoRunning, setCronoRunning] = useState(null);
  const [play, setPlay] = useState(true);

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
    fontSize: '5em',
    cursor: 'auto',
  };

  const bindCronos = (crono1, crono2) => {
    crono1.pararTempo();
    if (crono1.state.stop === true) {
      crono1.parcial();
      crono2.zerarCronometro();
      crono2.pararTempo();
    }
  };

  const pause = () => {
    if (crono1Ref.current.state.stop && crono2Ref.current.state.stop) {
      cronoRunning.pararTempo();
    } else if (crono1Ref.current.state.stop) {
      crono2Ref.current.pararTempo();
      setCronoRunning(crono2Ref.current);
    } else {
      crono1Ref.current.pararTempo();
      setCronoRunning(crono1Ref.current);
    }
    setPlay(!play);
  };

  useEffect(() => {
    // bp1.current.disabled = crono1Ref.current.state.stop;
    bp1.current.onclick = () => {
      bindCronos(crono1Ref.current, crono2Ref.current);
    };

    // bp2.current.disabled = crono2Ref.current.state.stop;
    bp2.current.onclick = () => {
      bindCronos(crono2Ref.current, crono1Ref.current);
    };
  }, [bp1, bp2]);

  return (
    <div className={styles.Container}>
      <Button type="primary" shape="circle" style={buttonStyle} ref={bp1}>
        <Cronometro id="p1" ref={crono1Ref} />
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
        {React.createElement(play ? PauseOutlined : CaretRightFilled, {
          style: iconStyle,
          onClick: () => pause(),
        })}
        <div className={styles.StopIcon}>&nbsp;</div>
      </div>

      <Button type="primary" shape="circle" style={buttonStyle} ref={bp2}>
        <Cronometro id="p2" ref={crono2Ref} />
      </Button>
    </div>
  );
}

export default Home;
