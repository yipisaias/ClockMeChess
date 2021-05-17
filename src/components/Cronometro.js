import React from 'react';
import tempoStyle from './Cronometro.antdStyle';

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
    this.state.parciais = [];
  }

  parcial() {
    const { segundos, centesimos, parciais } = this.state;
    const p = `${Math.floor(segundos / 10)}:${segundos % 10}${centesimos}\n\n`;
    this.tParcial += p;
    parciais.push(this.tParcial);
  }

  pararTempo() {
    const { stop } = this.state;
    this.setState({ stop: !stop });
  }

  incrementar() {
    const { stop } = this.state;
    if (stop === false) {
      this.setState(state => {
        if (state.centesimos >= 9) {
          this.zerar();
          this.incrementarSegundos(state);
        }
        return { centesimos: state.centesimos + 1 };
      });
    }
  }

  incrementarSegundos(state) {
    this.setState(() => ({ segundos: state.segundos + 1 }));
  }

  zerar() {
    this.setState({
      centesimos: 0,
    });
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
