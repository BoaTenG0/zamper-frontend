// import PropTypes from 'prop-types';
// import { useState } from 'react';

// // material-ui
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import Stack from '@mui/material/Stack';
// // import Link from '@mui/material/Link';
// import InputLabel from '@mui/material/InputLabel';
// import Typography from '@mui/material/Typography';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControlLabel from '@mui/material/FormControlLabel';

// // third-party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// // project-imports
// import IconButton from 'components/@extended/IconButton';
// import AnimateButton from 'components/@extended/AnimateButton';

// // assets
// import { Eye, EyeSlash } from 'iconsax-react';
// import axios from 'axios';
// import useScriptRef from 'hook/useScriptRef';
// import { useNavigate } from 'react-router';
// // import { dispatch } from 'store';
// // import { openSnackbar } from 'store/reducers/snackbar';
// import { Snackbar, Alert } from '@mui/material';
// // ============================|| JWT - LOGIN ||============================ //

// export default function AuthLogin() {
//   const [checked, setChecked] = useState(false);
//   const scriptedRef = useScriptRef();
//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const navigate = useNavigate();
//   // const headers = {
//   //   'Content-Type': 'application/json'
//   //   // "Origin": "https://normal-website.com"
//   // };
//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };
//   return (
//     <>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           submit: null
//         }}
//         validationSchema={Yup.object().shape({
//           email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
//           password: Yup.string().max(255).required('Password is required')
//         })}
//         onSubmit={async (values, { setStatus, setSubmitting }) => {
//           console.log('🚀 ~ onSubmit={ ~ values:', values);
//           axios.defaults.withCredentials = true;
//           try {
//             const res = await axios.post(
//               'https://zamper-server.onrender.com/login',
//               {
//                 email: values.email,
//                 password: values.password
//               },
//               { withCredentials: true }
//             );
//             console.log('🚀 ~ onSubmit={ ~ res:', res);
//             if (res.data.Status === 'Success') {
//               setSnackbarSeverity('success');
//               setSnackbarMessage('Login successful!');
//               navigate('/dashboard');
//             } else {
//               setSnackbarSeverity('error');
//               setSnackbarMessage('Login failed. Please try again.');
//             }
//             setSubmitting(false);
//           } catch (error) {
//             setSnackbarSeverity('error');
//             setSnackbarMessage('Login error: ' + error.message);
//             if (scriptedRef.current) {
//               setStatus({ success: false });
//               setSubmitting(false);
//             }

//             console.error('Login error:', error);
//           }
//         }}
//       >
//         {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
//           <form noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <Stack spacing={1}>
//                   <InputLabel htmlFor="email-login">Email Address</InputLabel>
//                   <OutlinedInput
//                     id="email-login"
//                     type="email"
//                     value={values.email}
//                     name="email"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     placeholder="Enter email address"
//                     fullWidth
//                     error={Boolean(touched.email && errors.email)}
//                   />
//                 </Stack>
//                 {touched.email && errors.email && (
//                   <FormHelperText error id="standard-weight-helper-text-email-login">
//                     {errors.email}
//                   </FormHelperText>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <Stack spacing={1}>
//                   <InputLabel htmlFor="password-login">Password</InputLabel>
//                   <OutlinedInput
//                     fullWidth
//                     error={Boolean(touched.password && errors.password)}
//                     id="-password-login"
//                     type={showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     name="password"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                           color="secondary"
//                         >
//                           {showPassword ? <Eye /> : <EyeSlash />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                     placeholder="Enter password"
//                   />
//                 </Stack>
//                 {touched.password && errors.password && (
//                   <FormHelperText error id="standard-weight-helper-text-password-login">
//                     {errors.password}
//                   </FormHelperText>
//                 )}
//               </Grid>

//               <Grid item xs={12} sx={{ mt: -1 }}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={checked}
//                         onChange={(event) => setChecked(event.target.checked)}
//                         name="checked"
//                         color="primary"
//                         size="small"
//                       />
//                     }
//                     label={<Typography variant="h6">Keep me sign in</Typography>}
//                   />

//                   {/* <Link variant="h6" color="text.primary">
//                     Forgot Password?
//                   </Link> */}
//                 </Stack>
//               </Grid>
//               {errors.submit && (
//                 <Grid item xs={12}>
//                   <FormHelperText error>{errors.submit}</FormHelperText>
//                 </Grid>
//               )}
//               <Grid item xs={12}>
//                 <AnimateButton>
//                   <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
//                     Login
//                   </Button>
//                 </AnimateButton>
//               </Grid>
//             </Grid>
//           </form>
//         )}
//       </Formik>
//       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
//         <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }

// AuthLogin.propTypes = { forgot: PropTypes.string };

import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project-imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { Eye, EyeSlash } from 'iconsax-react';
import useScriptRef from 'hook/useScriptRef';
import { useNavigate } from 'react-router';
import { Snackbar, Alert } from '@mui/material';

export default function AuthLogin() {
  const [checked, setChecked] = useState(false);
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          console.log('🚀 ~ onSubmit={ ~ values:', values);
          try {
            const response = await fetch('https://zamper-server.onrender.com/login', {
              method: 'POST',
              credentials: 'include', // This is important
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: values.email,
                password: values.password
              })
            });

            // Check for response status and log headers
            console.log('Response Headers:', response.headers);

            const res = await response.json();
            console.log('🚀 ~ onSubmit={ ~ res:', res);

            if (res.Status === 'Login Successful') {
              setSnackbarSeverity('success');
              setSnackbarMessage('Login successful!');
              navigate('/dashboard');
            } else {
              setSnackbarSeverity('error');
              setSnackbarMessage('Login failed. Please try again.');
            }
            setSnackbarOpen(true);
            setSubmitting(false);
          } catch (error) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Login error: ' + error.message);
            setSnackbarOpen(true);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setSubmitting(false);
            }

            console.error('Login error:', error);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <Eye /> : <EyeSlash />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                </Stack>
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Keep me sign in</Typography>}
                  />
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

AuthLogin.propTypes = { forgot: PropTypes.string };
