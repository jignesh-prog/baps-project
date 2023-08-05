import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {
  Box,
  Button, Checkbox,
  FormControlLabel,
  Grid, InputAdornment,
  Paper,
  Stack, TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'



export const Login = () => {
    const [name,setName] = useState<any | string>('');
    const [password,setPassword] = useState<any | string>('');
    const [checked,isChecked] = useState<any | string>();
    const navigate = useNavigate()
  return (
      <Box
         sx={{
           marginTop: 8,
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
         }}
       >
         <Paper elevation={8} >
           <Grid margin={4}>
             <Stack spacing={4} width='360px' >
               <Stack >
                 <Typography variant='h5'>Login yo continue</Typography>
               </Stack>
               <Stack spacing={2}>
                 <TextField color='primary' label='Username' size='medium'
                 value={name}
                    onChange={(e) => setName(e.target.value )}
                   InputProps={{
                     endAdornment: <InputAdornment position='end'>{<EmailIcon />}</InputAdornment>
                   }}
                 >
                 </TextField>
                 <TextField label='Password'
                   required size='medium'
                  value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   color='primary'
                   InputProps={{
                     endAdornment: <InputAdornment position='end'>{<LockIcon />}</InputAdornment>
                   }}
                 >
                 </TextField>
               </Stack>
               <Stack direction='row' spacing={2}>
                 <FormControlLabel control={<Checkbox value='Remember me' />}  value={checked} onClick={(e) =>
                isChecked(checked)} label='Remember me' />
                 </Stack>
                 <Stack>
                 <Button variant='contained' type='submit' color='primary' size='small' onClick={() =>
                navigate('Dashbord')}>  Sign In
                 </Button>
               </Stack>
             </Stack>
           </Grid>
         </Paper>
       </Box>
   )
 }



export default Login
