import React from 'react'

import { Button, withStyles } from '@material-ui/core'

const ChooseAgainButton = ({ classes, handleClick, loading, master }) => {
  return(
      master === 'vader'
      ? (
        <VaderButton
          onClick={handleClick}
          className={classes.ChooseAgainButton}
          disabled={loading}
        >
          choose your path again, Padawan
        </VaderButton>
      )
      : (
        <LukeButton
          onClick={handleClick}
          className={classes.ChooseAgainButton}
          disabled={loading}
        >
          choose your path again, Padawan
        </LukeButton>
      )
  )
}

const VaderButton = withStyles((theme) => ({
  root: {
    color: theme.palette.gray,
    backgroundColor: theme.palette.white,
    '&:hover': {
      backgroundColor: theme.palette.white
    },
    '&:disabled': {
      backgroundColor: `${theme.palette.white}80`
    }
  }
}))(Button)

const LukeButton = withStyles((theme) => ({
  root: {
    color: theme.palette.luke,
    backgroundColor: theme.palette.gray,
    '&:hover': {
      backgroundColor: theme.palette.gray
    },
    '&:disabled': {
      backgroundColor: `${theme.palette.gray}80`
    }
  }
}))(Button)

const styles = theme => ({
  ChooseAgainButton: {
    fontFamily: 'Montserrat',
    textTransform: 'none',
    fontWeight: 'bold',
    lineHeight: '20px',
    fontSize: 16,
    height: 56,
    width: 347,
    borderRadius: 10,
    marginBottom: 50,
    maxWidth: '100%'
  }
})

export default withStyles(styles)(ChooseAgainButton)
