import colors from '../utils/colors';

const playersButtonStyle = {
  backgroundColor: colors.primary,
  border: '4px solid red',
  width: '85%',
  maxWidth: 300,
  height: '40%',
  margin: 'auto',
  cursor: 'auto',
};

const controlsAreaStyle = {
  backgroundColor: colors.secondary,
  width: 140,
  margin: 'auto',
  padding: '5px 0px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const controlsButtonStyle = {
  height: '90%',
  padding: 0,
  borderColor: colors.secondary,
};

const controlsIconStyle = {
  color: colors.disabled,
  fontSize: '3em',
  display: 'block',
};

export {
  playersButtonStyle,
  controlsAreaStyle,
  controlsButtonStyle,
  controlsIconStyle,
};
