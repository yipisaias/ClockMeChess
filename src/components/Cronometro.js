import React from 'react';

const tempoStyle = {
  display: 'inline',
  verticalAlign: 'super',
};

class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centesimos: 0,
      segundos: 0,
      stop: true,
      nameStop: 'Stop',
      tParcial: '',
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
    this.tParcial += p;
  }

  pararTempo() {
    const { stop } = this.state;
    this.setState(prev => ({
      stop: !prev.stop,
    }));
    if (stop) this.state.nameStop = 'Stop';
    else this.state.nameStop = 'Start';
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

    return (
      <div
        role="button"
        tabIndex={0}
        style={tempoStyle}
        onClick={() => {
          this.pararTempo();
          this.parcial();
          this.zerarCronometro();
        }}
        onKeyPress={() => {}}
      >
        {Math.floor(segundos / 10)}:{segundos % 10}
        {''}
        {centesimos}
      </div>
    );
  }
}

export default Cronometro;
