import React from 'react'

import { Button, withStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const BackButton = ({ classes, master, handleBackClick }) =>
  <div className={classes.BackButton__wrapper}>
    <ArrowBackIcon
      className={classes[`BackButton_color__${master}`]}
    />
    <Button
      onClick={handleBackClick}
      component='span'
      className={classes.BackButton_button}
    >
      <span className={classes[`BackButton_color__${master}`]}>
        back
      </span>
    </Button>
  </div>

const styles = theme => ({
  BackButton__wrapper: {
    position: 'absolute',
    top: 35,
    left: 68,
    display: 'flex',
    alignItems: 'center'
  },
  BackButton_color__vader: {
    color: theme.palette.white
  },
  BackButton_color__luke: {
    color: theme.palette.gray
  },
  BackButton_button: {
    fontFamily: 'Montserrat',
    lineHeight: '20px',
    fontSize: 18,
    height: 56,
    borderRadius: 10,
    textTransform: 'none',
    '&:hover': {
      background: 'transparent'
    }
  }
})

export default withStyles(styles)(BackButton)
