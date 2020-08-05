import React from 'react'

import { Grid, withStyles } from '@material-ui/core'

import BackButton from './backButton'
import ChooseAgainButton from './chooseAgainButton'
import Avatar from './avatar'
import Message from './message'

const Master = ({
  background,
  classes,
  handleBackClick,
  handleClick,
  loading,
  master,
  masterName
}) =>
  <div className={classes.Master_container} style={{background: background}}>
    <BackButton handleBackClick={handleBackClick} master={master} />

    <Grid container className={classes.Master_content}>
      <Grid item xs={12}>
        <ChooseAgainButton
          handleClick={handleClick}
          loading={loading}
          master={master}
        />
      </Grid>

      <Grid item xs={12}>
        <Avatar master={master} />
        <Message name={masterName} />
      </Grid>
    </Grid>
  </div>

const styles = theme => ({
  Master_container: {
    textAlign: 'center',
    minHeight: 'calc(100vh - 130px)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 130
  },
  Master_content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down(800)]: {
      flexDirection: 'column-reverse',
      maxWidth: '80%'
    }
  }
})

export default withStyles(styles)(Master)
