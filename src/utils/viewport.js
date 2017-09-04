import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const viewport = {
  width: () => width / 100,
  height: () => height / 100,
};

export default viewport;
