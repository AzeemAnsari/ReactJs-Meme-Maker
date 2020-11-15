import React, { useState } from 'react';

import { Button, Box, makeStyles } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

const useStyles = makeStyles((theme) => ({
  btnMargin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  btnWidth: {
    width: '40%',
  },
  memeImg: {
    marginTop: theme.spacing(3),
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '100%',
    display: 'block',
  },
}));

const GeneratedMeme = () => {
  const [copied, setCopied] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const clipboard = useClipboard();
  const url = new URLSearchParams(location.search).get('url');

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return (
    <div>
      <Box align="center" className={classes.btnMargin}>
        <Button
          variant="contained"
          className={classes.btnWidth}
          color="primary"
          size="large"
          fullWidth={true}
          onClick={() => history.push('/')}
        >
          Make More Memes
        </Button>
        <Button
          variant="contained"
          size="large"
          className={classes.btnWidth}
          color="secondary"
          fullWidth={true}
          onClick={copyLink}
        >
          {copied ? 'Link Copied!' : 'Copy Link'}
        </Button>
      </Box>
      {url && <img src={url} alt="meme maker" className={classes.memeImg} />}
    </div>
  );
};

export default GeneratedMeme;
