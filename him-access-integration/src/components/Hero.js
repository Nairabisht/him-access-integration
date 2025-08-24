import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        minHeight: '100vh',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD 10%, #FFFF 60%)'
            : `linear-gradient(180deg, #02294F 10%, ${alpha('#090E10', 0.0)} 60%)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: { xs: '64px', sm: '80px' },
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Set flex direction for larger screens
          alignItems: 'center',
          justifyContent: 'space-between', // Space out heading and image
          pt: { xs: 4, sm: 10 },
          pb: { xs: 4, sm: 8 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'left', // Align text to the left
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              color: (theme) =>
                theme.palette.mode === 'light' ? 'black' : 'inherit',
              padding: { xs: '0 16px', sm: '0' },
            }}
          >
            Single Si
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              gn On
            </Typography>
          </Typography>
          <Typography
            textAlign="left" // Align text to the left
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality solutions
            tailored to your needs. Elevate your experience with top-tier features
            and services.
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 2, sm: 4, md: 0 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: { xs: '100%', md: '0%' }, // Adjust width for larger screens
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/images/hero-light.png")'
                : 'url("/images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
