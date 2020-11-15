import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  heading: {
    display: 'block',
    fontWeight: '600',
    fontSize: '2rem',
    color: '#424242',
    textAlign: 'center',
  },
}));

const Heading = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="button" className={classes.heading}>
        {title}
      </Typography>
    </>
  );
};

export default Heading;
