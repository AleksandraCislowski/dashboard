import React from 'react';
import { Avatar, useMediaQuery } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ThemeToggleButton from './ThemeToggleButton';
import Link from 'next/link';
import { alpha, useTheme } from '@mui/material/styles';
import layoutClasses from "@/styles/Layout.module.scss";

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props;
  const { data: session } = useSession();
  const theme = useTheme();
  const userProfileImg = session?.user?.image as string;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const tabletCheck = useMediaQuery('(min-width: 768px)');

  return (
    <AppBar
      component='header'
      position='sticky'
      elevation={0}
      sx={{
        marginBottom: '32px',
        backgroundColor:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.background.paper, 0.82)
            : alpha(theme.palette.background.paper, 0.9),
        backdropFilter: 'blur(16px)',
      }}
    >
      <a className={layoutClasses.skipLink} href='#main-content'>
        Skip to main content
      </a>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ minHeight: { xs: 64, md: 68 }, alignItems: 'center' }}
        >
          <Link
            href='/dashboard'
            aria-label='Go to Northstar Commerce dashboard'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src='/compas-mark-compact.png'
              alt='Northstar Commerce logo'
              sx={{
                display: { xs: 'none', md: 'block' },
                mr: 1,
                width: 48,
                height: 48,
                objectFit: 'contain',
                flexShrink: 0,
                transform: 'translateY(1px)',
              }}
            />
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.24rem',
                lineHeight: 1,
                color: theme.palette.text.primary,
              }}
            >
              Northstar Commerce
            </Typography>
          </Link>
          <Link
            href='/dashboard'
            aria-label='Go to Northstar Commerce dashboard'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src='/compas-mark-compact.png'
              alt='Northstar Commerce logo'
              sx={{
                display: { xs: 'block', md: 'none' },
                mr: 0.85,
                width: 40,
                height: 40,
                objectFit: 'contain',
                flexShrink: 0,
                transform: 'translateY(1px)',
              }}
            />
            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.18rem',
                lineHeight: 1,
                color: theme.palette.text.primary,
              }}
            >
              Northstar
            </Typography>
          </Link>
          <Box sx={{ paddingRight: { xs: 1, md: 3 }, marginLeft: 'auto' }}>
            {tabletCheck && (
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '0.92rem',
                  letterSpacing: '0.01em',
                }}
              >
                {session && `Northstar workspace: ${session?.user?.name}`}
              </Typography>
            )}
          </Box>

          <ThemeToggleButton ColorModeContext={ColorModeContext} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open account menu'>
              <IconButton
                id='account-menu-button'
                onClick={handleOpenUserMenu}
                aria-label={session ? 'Open account menu' : 'Open sign in menu'}
                aria-controls={anchorElUser ? 'account-menu' : undefined}
                aria-haspopup='menu'
                aria-expanded={anchorElUser ? 'true' : undefined}
                sx={{
                  p: 0,
                  ml: 0.5,
                }}
              >
                <Avatar
                  alt={session?.user?.name as string}
                  src={userProfileImg}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '45px',
                '& .MuiPaper-root': {
                  borderRadius: '16px',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 18px 40px rgba(2, 6, 23, 0.42)'
                      : '0 18px 40px rgba(15, 23, 42, 0.12)',
                },
              }}
              id='account-menu'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              MenuListProps={{
                'aria-labelledby': 'account-menu-button',
              }}
            >
              {session && (
                <MenuItem
                  component={Link}
                  href='/dashboard/profile'
                  onClick={handleCloseUserMenu}
                  sx={{
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                  }}
                >
                  <Typography textAlign='center'>Account settings</Typography>
                </MenuItem>
              )}
              <MenuItem onClick={() => (session ? signOut() : signIn())}>
                <Typography textAlign='center'>
                  {session ? 'Sign out' : 'Sign in'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
