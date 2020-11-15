import React from 'react';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerLink: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    marginTop: 'auto',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerLink}>
      <Typography variant="body2" align="center">
        &copy; 2020 -{' '}
        <Link href="https://azeemansari.me" target="_blank" color="inherit">
          Azeem Ansari
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
