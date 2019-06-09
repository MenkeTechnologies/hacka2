  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   	email:' ',
  //   	password:' ',
  //   	proPicLink:' ',
  //   	biography:' ',
  //   };
  // }

  import React, { useState } from 'react';
  import Avatar from '@material-ui/core/Avatar';
  import Button from '@material-ui/core/Button';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import TextField from '@material-ui/core/TextField';
  import Link from '@material-ui/core/Link';
  import Grid from '@material-ui/core/Grid';
  import Box from '@material-ui/core/Box';
  import Typography from '@material-ui/core/Typography';
  import { makeStyles } from '@material-ui/core/styles';
  import Container from '@material-ui/core/Container';
  import ImageUploader from 'react-images-upload';
  
  function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with love by the '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' team.'}
      </Typography>
    );
  }

  function signUpAction() {

  }

  function onDrop(picture) {

  }
  
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUp() {
    const classes = useStyles();

    const [ email_state, setEmail ] = useState('');
    const [ name_state, setName ] = useState('');
    const [ password_state, setPassword ] = useState('');
    const [ biography_state, setBiography ] = useState('');
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  value={name_state}
                  onChange={(event) => setName(event.target.name_state)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email_state}
                  onChange={(event) => setEmail(event.target.email_state)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password_state}
                  onChange={(event) => setPassword(event.target.password_state)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Biography"
                  label="Biography"
                  type="Biography"
                  id="Biography"
                  value={biography_state}
                  onChange={(event) => setBiography(event.target.biography_state)}
                />
              </Grid>
            </Grid>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop()}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <MadeWithLove />
        </Box>
      </Container>
    );
  }  