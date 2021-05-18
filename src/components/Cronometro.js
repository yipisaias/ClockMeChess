import React from 'react';
import tempoStyle from './CronometroAntdStyles';

class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centesimos: 0,
      segundos: 0,
      stop: true,
      tParcial: '',
      parciais: [],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.incrementar(), 10);
  }

  zerarCronometro() {
    this.state.centesimos = 0;
    this.state.segundos = 0;
    this.state.tParcial = '';
  }

  parcial() {
    const { segundos, centesimos } = this.state;
    const p = `${Math.floor(segundos / 10)}:${segundos % 10}${centesimos}\n\n`;
    this.setState(prev => ({ tParcial: prev.tParcial + p }));
    this.setState(prev => ({ ...prev.parciais.push(prev.tParcial) }));
  }

  pararTempo() {
    const { stop } = this.state;
    this.setState(prev => ({ ...prev, stop: !stop }));
  }

  incrementar() {
    const { stop } = this.state;
    if (stop === false) {
      this.setState(prev => {
        if (prev.centesimos >= 9) {
          this.zerar();
          this.incrementarSegundos(prev);
        }
        return { centesimos: prev.centesimos + 1 };
      });
    }
  }

  incrementarSegundos(state) {
    this.setState(prev => ({ ...prev, segundos: state.segundos + 1 }));
  }

  zerar() {
    this.setState(prev => ({ ...prev, centesimos: 0 }));
  }

  render() {
    const { centesimos, segundos } = this.state;
    const { style } = this.props;
    return (
      <div style={{ ...tempoStyle, ...style }}>
        {Math.floor(segundos / 10)}:{segundos % 10}
        {''}
        {centesimos}
      </div>
    );
  }
}

export default Cronometro;
