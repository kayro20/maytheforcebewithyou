import React from 'react'

import { Button, Typography, withStyles } from '@material-ui/core'

const Welcome = ({classes, handleClick, loading}) => {
  return(
    <div className={classes.Welcome_container}>
      <Typography variant='h2' className={classes.Welcome_h1}>
        Welcome to <span className={classes.Welcome_bold}>iClinic</span>
      </Typography>
      <Typography variant='overline' className={classes.Welcome_overline}>
        frontend challend
      </Typography>

      <Button
        onClick={handleClick}
        className={classes.Welcome_button}
        disabled={loading}
      >
        S T A R T
      </Button>
    </div>
  )
}

const styles = theme => ({
  Welcome_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    height: '100%',
    flexDirection: 'column'
  },
  Welcome_h1:{
    fontSize: '4.5em',
    fontFamily: 'Montserrat',
    color: theme.palette.iclinic,
    [theme.breakpoints.down(600)]: {
      fontSize: '3em'
    }
  },
  Welcome_overline: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: theme.palette.iclinic
  },
  Welcome_bold: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  Welcome_button: {
    fontFamily: 'Montserrat',
    backgroundColor: theme.palette.iclinic,
    color: theme.palette.white,
    fontSize: 18,
    width: 150,
    height: 46,
    fontWeight: 'bold',
    borderRadius: 10,
    lineHeight: '22px',
    marginTop: 100,
    '&:hover': {
      backgroundColor: theme.palette.iclinic,
    },
    '&:disabled': {
      backgroundColor: `${theme.palette.iclinic}80`,
    }
  }
})

export default withStyles(styles)(Welcome)
