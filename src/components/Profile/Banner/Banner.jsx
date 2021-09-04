import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: '#cccccc',
    padding: theme.spacing(5, 0, 5),
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.content}>
        <Container maxWidth="sm" align="center">
          <br />
          <br />
          <br />
          <br />
          <Typography
            component="p"
            variant="h5"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Good products = Good profit
          </Typography>
          {/* <br /> */}
        </Container>
      </div>
    </div>
  );
}

export default Banner;
