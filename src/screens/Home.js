import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { CaretRightFilled, PauseOutlined } from '@ant-design/icons';
import StopIcon from '../components/StopIcon';
import Cronometro from '../components/Cronometro';
import colors from '../utils/colors';
import {
  playersButtonStyle,
  controlsAreaStyle,
  controlsButtonStyle,
  controlsIconStyle,
} from './HomeAntdStyles';
import styles from './Home.module.css';

let cronoRunning = null;

function Home() {
  const crono1Ref = useRef(null);
  const crono2Ref = useRef(null);
  const p1BtnRef = useRef(null);
  const p2BtnRef = useRef(null);
  const [cronoRunningBtn, setCronoRunningBtn] = useState(null);
  const [play, setPlay] = useState(true);
  const [controls, setControls] = useState({
    disabled: true,
    style: controlsIconStyle,
  });

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
      setControls(prev => ({
        enabled: false,
        style: { ...prev.style, color: colors.default },
      }));
    };

    p2BtnRef.current.onclick = () => {
      if (crono2Ref.current.state.stop) {
        p1BtnRef.current.disabled = true;
      } else {
        p2BtnRef.current.disabled = true;
        p1BtnRef.current.disabled = false;
      }
      bindCronos(crono2Ref.current, crono1Ref.current);
      setControls(prev => ({
        enabled: false,
        style: { ...prev.style, color: colors.default },
      }));
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
    <div
      className={styles.Container}
      style={{
        backgroundColor: colors.background,
        borderColor: colors.default,
      }}
    >
      <Button
        type="primary"
        shape="circle"
        style={playersButtonStyle}
        ref={p1BtnRef}
      >
        <Cronometro style={{ transform: 'rotate(180deg)' }} ref={crono1Ref} />
      </Button>

      <div style={controlsAreaStyle}>
        <Button
          ghost
          disabled={controls.disabled}
          style={controlsButtonStyle}
          onClick={pauseUnpause}
        >
          {React.createElement(play ? PauseOutlined : CaretRightFilled, {
            style: controls.style,
          })}
        </Button>
        <Button
          ghost
          disabled={controls.disabled}
          style={controlsButtonStyle}
          // onClick={pauseUnpause}
        >
          <StopIcon
            style={{ ...controls.style, fontSize: '2.5em', marginTop: 2 }}
          />
        </Button>
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
