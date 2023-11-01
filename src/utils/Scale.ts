import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const { width: windowWidth } = Dimensions.get('window');

const isTablet = DeviceInfo.isTablet();
const DEFAULT_WIDTH = isTablet ? 768 : 320;

export const scaleBySize = (size: number) =>
  (windowWidth / DEFAULT_WIDTH) * size;
