import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import { Menu as MenuIcon, AccountCircle, ExitToApp as ExitToAppIcon } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, selectUserToken } from '@widgets/auth/model/user_slice'
import { showModal } from '@widgets/auth/model/ui_slice' 

export const AppBarHeader = () => {
  const userToken = useSelector(selectUserToken)
  const dispatch = useDispatch()

  const handleOpenAuthModal = () => {
    dispatch(showModal(true))
  }

  const handleLogoutUser = () => {
    dispatch(logoutUser())
  }

  return (
    <Box sx={{ padding: '20px 0px 20px 0px' }}>
      <AppBar
        position='static'
        sx={{
          borderRadius: '10px'
        }}
      >
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Фильмы
          </Typography>

          {userToken ? (
            <IconButton size='large' edge='end' onClick={handleLogoutUser}>
              <ExitToAppIcon />
            </IconButton>
          ) : (
            <IconButton size='large' edge='end' onClick={handleOpenAuthModal}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
