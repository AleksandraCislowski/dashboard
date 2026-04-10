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
import { useTheme } from '@emotion/react';
import Link from 'next/link';

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
    <AppBar position='sticky' sx={{ marginBottom: '32px' }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ minHeight: { xs: 64, md: 68 }, alignItems: 'center' }}
        >
          <Link
            href='/dashboard'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src='/compas-mark.png'
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
              }}
            >
              Northstar Commerce
            </Typography>
          </Link>
          <Link
            href='/dashboard'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src='/compas-mark.png'
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
              }}
            >
              Northstar
            </Typography>
          </Link>
          <Box sx={{ paddingRight: { xs: 2, md: 4 }, marginLeft: 'auto' }}>
            {tabletCheck && (
              <Typography>
                {session && `Northstar workspace: ${session?.user?.name}`}
              </Typography>
            )}
          </Box>

          <ThemeToggleButton ColorModeContext={ColorModeContext} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open account menu'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={session?.user?.name as string}
                  src={userProfileImg}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
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
            >
              <MenuItem>
                <Link
                  href={'/dashboard/profile'}
                  style={{
                    // @ts-ignore
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                  }}
                >
                  {session && (
                    <Typography textAlign='center'>Account settings</Typography>
                  )}
                </Link>
              </MenuItem>
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
