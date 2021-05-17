import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { CaretRightFilled, PauseOutlined } from '@ant-design/icons';
import Cronometro from '../components/Cronometro';
import colors from '../utils/colors';
import styles from './Home.module.css';

let cronoRunning = null;

function Home() {
  const crono1Ref = useRef(null);
  const crono2Ref = useRef(null);
  const p1BtnRef = useRef(null);
  const p2BtnRef = useRef(null);
  const [cronoRunningBtn, setCronoRunningBtn] = useState(null);
  const [play, setPlay] = useState(true);
  const [enableControls, setEnableControls] = useState(true);

  const iconStyle = {
    // color: colors.default,
    fontSize: '3em',
    display: 'block',
  };

  const playersButtonStyle = {
    backgroundColor: colors.primary,
    border: '4px solid red',
    width: '85%',
    maxWidth: 300,
    height: '40%',
    margin: 'auto',
    fontSize: '4.75em',
    cursor: 'auto',
  };

  const controlsAreaStyle = {
    backgroundColor: colors.secondary,
    width: 140,
    margin: 'auto',
    padding: '5px 0px',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const controlsButtonStyle = {
    height: '90%',
    padding: 0,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  };

  const bindCronos = (crono1, crono2) => {
    crono1.pararTempo();
    if (crono1.state.stop === true) {
      crono1.parcial();
      crono2.zerarCronometro();
      crono2.pararTempo();
    }
  };

  const pauseUnpause = () => {
    if (!crono1Ref.current.state.stop || !crono2Ref.current.state.stop) {
      if (!crono1Ref.current.state.stop) {
        cronoRunning = crono1Ref.current;
        setCronoRunningBtn(p1BtnRef.current);
      } else if (!crono2Ref.current.state.stop) {
        cronoRunning = crono2Ref.current;
        setCronoRunningBtn(p2BtnRef.current);
      }
    }
    cronoRunning.pararTempo();
    setPlay(!play);
  };

  useEffect(() => {
    p1BtnRef.current.onclick = () => {
      if (crono1Ref.current.state.stop) {
        p2BtnRef.current.disabled = true;
      } else {
        p1BtnRef.current.disabled = true;
        p2BtnRef.current.disabled = false;
      }
      bindCronos(crono1Ref.current, crono2Ref.current);
      setEnableControls(false);
    };

    p2BtnRef.current.onclick = () => {
      if (crono2Ref.current.state.stop) {
        p1BtnRef.current.disabled = true;
      } else {
        p2BtnRef.current.disabled = true;
        p1BtnRef.current.disabled = false;
      }
      bindCronos(crono2Ref.current, crono1Ref.current);
      setEnableControls(false);
    };
  }, [p1BtnRef, p2BtnRef]);

  useEffect(() => {
    if (cronoRunningBtn !== null) {
      if (!play) {
        cronoRunningBtn.disabled = true;
      } else {
        cronoRunningBtn.disabled = false;
      }
    }
  }, [play]);

  return (
    <div className={styles.Container}>
      <Button
        type="primary"
        shape="circle"
        style={playersButtonStyle}
        ref={p1BtnRef}
      >
        <Cronometro ref={crono1Ref} />
      </Button>

      <div style={controlsAreaStyle}>
        <Button
          disabled={enableControls}
          style={controlsButtonStyle}
          onClick={pauseUnpause}
        >
          {React.createElement(play ? PauseOutlined : CaretRightFilled, {
            style: iconStyle,
          })}
        </Button>
        <div className={styles.StopIcon}>&nbsp;</div>
      </div>

      <Button
        type="primary"
        shape="circle"
        style={playersButtonStyle}
        ref={p2BtnRef}
      >
        <Cronometro ref={crono2Ref} />
      </Button>
    </div>
  );
}

export default Home;
