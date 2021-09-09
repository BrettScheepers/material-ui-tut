import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        className={classes.title}
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
        type="submit"
        color="primary"
        variant="contained"
        // disableElevation
        onClick={() => alert('You clicked me :)')}
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      
      {/* Icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="large" />
      <AcUnitOutlinedIcon color="error" fontSize="large" />
      <AcUnitOutlinedIcon color="disabled" fontSize="large" /> */}
    </Container>
  )
}
