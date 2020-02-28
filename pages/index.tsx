import * as React from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Checkbox,
  Slider,
  Typography,
  Grid,
  Container,
  FormLabel,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <h1>Whisky Notes</h1>
        <Grid container item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Distillery</InputLabel>
            <Input id="standard-adornment-amount" value={'Jameson'} />
          </FormControl>
        </Grid>
        <Grid container item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Region</InputLabel>
            <Input id="standard-adornment-amount" value={'Dublin, IE'} />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Age</InputLabel>
            <Input id="standard-adornment-amount" value={7} />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Strength</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={40}
              startAdornment={<InputAdornment position="start">%</InputAdornment>}
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Date</InputLabel>
            <Input id="standard-adornment-amount" value={'1.1.2020'} />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Water</InputLabel>
            <Checkbox value="" color="primary" />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Rating
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps-2" gutterBottom>
          Glance
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps-2"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps-12" gutterBottom>
          Color
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps-12"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <h1>Nose</h1>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Fruity
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Floral
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Spicy
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Cereal
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Peaty
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Sulphury
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Feinty
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Nutty
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Woody
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Winey
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Chocolate
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <h1>Taste</h1>
          <FormControl component="fieldset">
            <FormLabel component="legend">Taste</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="light"
                control={<Checkbox color="primary" />}
                label="Light"
                labelPlacement="top"
              />
              <FormControlLabel
                value="smooth"
                control={<Checkbox color="primary" />}
                label="Smooth"
                labelPlacement="top"
              />
              <FormControlLabel
                value="creamy"
                control={<Checkbox color="primary" />}
                label="Creamy"
                labelPlacement="top"
              />
              <FormControlLabel
                value="oily"
                control={<Checkbox color="primary" />}
                label="Oily"
                labelPlacement="top"
              />
              <FormControlLabel
                value="dry"
                control={<Checkbox color="primary" />}
                label="Dry"
                labelPlacement="top"
              />
              <FormControlLabel
                value="powerful"
                control={<Checkbox color="primary" />}
                label="Powerful"
                labelPlacement="top"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Fruity
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Floral
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Spicy
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Cereal
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Peaty
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Sulphury
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Feinty
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Nutty
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Woody
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Winey
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps" gutterBottom>
          Chocolate
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid container item xs={12}>
          <FormControl fullWidth>
            <Typography id="discrete-slider-small-steps-12" gutterBottom>
          Finnish
            </Typography>
            <Slider
              defaultValue={1}
              aria-labelledby="discrete-slider-small-steps-12"
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

      </Grid>
    </Container>
  )
}

export default IndexPage
