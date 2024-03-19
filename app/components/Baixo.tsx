import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Baixo = () => {
  const footerStyle = {
    backgroundColor: '#FDD835',
    color: '#333',
    padding: '20px',
    marginTop: '4rem',
    textAlign: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '30px',
    color: '#333',
  };

  return (
    <footer className='text-center bg-gray-300 text-black p-10' >
      <Typography variant="h6" gutterBottom>
        Siga-nos nas redes sociais
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={iconStyle} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={iconStyle} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon style={iconStyle} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="mailto:contato@confeitaria.com">
            <EmailIcon style={iconStyle} />
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" mt={2}>
        © {new Date().getFullYear()} Confeitaria. Todos os direitos reservados.
      </Typography>
    </footer>
  );
};

export default Baixo;
