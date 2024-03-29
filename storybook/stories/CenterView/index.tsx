import React from 'react';
import { View, ViewProps } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

export default function CenterView({ children }: ViewProps) {
  return <View style={styles.main}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
