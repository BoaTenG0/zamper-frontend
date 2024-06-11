import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import Logo from '../../assets/images/users/ThreeGolBank.png';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';
import { Image } from 'mui-image';

// ================================|| LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <Image src={Logo} width={120} />
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin forgot="/auth/forgot-password" />
        </Grid>
        <Grid item xs={12}>
          <Typography component={Link} to={'/auth/register'} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Register for new account.
          </Typography>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
