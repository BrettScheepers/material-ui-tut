import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { FormControlLabel, makeStyles } from '@material-ui/core'
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('Money')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == '') setTitleError(true)
    if (details == '') setDetailsError(true)

    if (title && details) {
      console.log(title, details)
    }
  } 

  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Note Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup color="primary" value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel
              color="primary"
              control={<Radio color="primary" />}
              label="Money"
              value="Money"
            />
            <FormControlLabel
              color="primary"
              control={<Radio color="primary" />}
              label="Todos"
              value="Todos"
            />
            <FormControlLabel
              color="primary"
              control={<Radio color="primary" />}
              label="Reminders"
              value="Reminders"
            />
            <FormControlLabel
              color="primary"
              control={<Radio color="primary" />}
              label="Work"
              value="Work"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>


      
    </Container>
  )
}
