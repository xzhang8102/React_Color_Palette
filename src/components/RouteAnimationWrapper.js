import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RouteAnimationWrapperStyles';

const RouteAnimationWrapper = ({ children, classes }) => {
  return <div className={classes.page}>{children}</div>;
};

export default withStyles(styles)(RouteAnimationWrapper);
