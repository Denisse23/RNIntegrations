import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const { width } = Dimensions.get('window');

const isTablet = DeviceInfo.isTablet();
const DEFAULT_WIDTH = isTablet ? 768 : 320;

export const scaleBySize = (size: number) => (width / DEFAULT_WIDTH) * size;
