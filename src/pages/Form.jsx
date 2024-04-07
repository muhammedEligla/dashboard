import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { regEmail, regPhone } from "./jsonData/RegularEx";
import React from "react";

const currencies = [
    {
      value: 'User',
      label: 'User',
    },
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
  ];

const Form = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = ()=> setOpen(true);
    
    return (
        <Box  onSubmit={handleSubmit(onSubmit)}
        component={'form'} sx={{display:"flex" , 
        flexDirection:"column" , gap:3}}>

        <Stack sx={{flexDirection:"row" , gap:2}}>

            <TextField 
            error={Boolean(errors.firstName)} 
            helperText={errors.firstName && "this file is required & min 3 char.." }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{flex:1}} label="first name" variant="filled" />

            <TextField  
            error={Boolean(errors.lastName)} 
            helperText={errors.lastName && "this file is required & min 3 char.." }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{flex:1}} label="last name" variant="filled" />
        </Stack>

            <TextField label="email" variant="filled" 
            error={Boolean(errors.email)} 
            helperText={errors.email && "this file is required & min 3 char.." }
            {...register("email", {required: true, pattern: regEmail })}
            />

            <TextField label="contact number" variant="filled" 
            error={Boolean(errors.number)} 
            helperText={errors.number && "this file is required & min 3 char.." }
            {...register("number", {required: true , pattern: regPhone })}
            />
            <TextField label="address" variant="filled" />
            <TextField label="address 2" variant="filled" />
            

            <TextField
            id="filled-select-currency"
            select
            label="Select"
            defaultValue="User"
            helperText="Role"
            variant="filled"
            >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
            </TextField>

            <Box sx={{textAlign:"right"}}>
                <Button type="submit" sx={{ textTransform:"capitalize"}} variant="contained">
                    Create New User
                </Button>
            </Box>

            <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                  Acount cteated successfully!
              </Alert>
            </Snackbar>
        </Box>
    );
}

export default Form;
