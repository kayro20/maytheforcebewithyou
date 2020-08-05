import React from 'react'
import { withStyles } from '@material-ui/core'
import Vader from '../../assets/images/darth-vader.png'
import Luke from '../../assets/images/luke-skywalker.png'

const Avatar = ({ classes, master }) =>
  <img src={master === 'vader' ? Vader : Luke} className={classes.Avatar} />

const styles = theme => ({
  Avatar: {
    borderRadius: '100%',
    maxWidth: '100%'
  }
})

export default withStyles(styles)(Avatar)
