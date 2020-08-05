import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const Message = ({ classes, name }) => {
  return(
    name === 'Darth Vader'
      ? (
        <VaderMessage
          variant='body1'
          className={classes.Message}
        >
          Your master is <span className={classes.Message_bold}>{name}</span>
        </VaderMessage>
      )
      : (
        <LukeMessage
          variant='body1'
          className={classes.Message}
        >
          Your master is <span className={classes.Message_bold}>{name}</span>
        </LukeMessage>
      )
  )
}

const VaderMessage = withStyles((theme) => ({
  root: {
    color: theme.palette.white
  }
}))(Typography)

const LukeMessage = withStyles((theme) => ({
  root: {
    color: theme.palette.gray
  }
}))(Typography)

const styles = theme => ({
  Message: {
    fontFamily: 'Montserrat',
    fontSize: '2.25em',
    margin: '30px 0 30px 0',
    [theme.breakpoints.down(600)]: {
      fontSize: '2em'
    }
  },
  Message_bold: {
    fontWeight: 'bold'
  }
})

export default withStyles(styles)(Message)
