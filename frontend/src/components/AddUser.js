import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box, handleBreakpoints } from '@mui/system'
//import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddUser = () => {
  const history=useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    contactNumber: "",
   
  });
  const [checked,setChecked]=useState(false);
  const handleChange = (e)=>{
   setInputs ((prevState)=>({
      ...prevState,
    [e.target.name]:e.target.value
    }))
   //console.log(e.target.name,'value',e.target.value);
  };
  const sendRequest = async () => {
    
    try {
      await axios.post("http://localhost:5000/users/adduser", {
        name: String(inputs.name),
        email: String(inputs.email),
        contactNumber: String(inputs.contactNumber),
      }).then(res => {
        toast.success("user Added Successfully")
        return res.data});

    } catch (error) {
      console.error("API call failed ajahk:", error);
      toast.error("Something went wrong")
    }
  };



  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/'));

  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={'center'}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}

      >
        <FormLabel>Name</FormLabel>
        <TextField
        value={inputs.name}
        onChange={handleChange}
         margin='normal'
          fullWidth variants="outlined"
           name='name' / >
        <FormLabel>email</FormLabel>
        <TextField
         value={inputs.email}
         onChange={handleChange}
         margin='normal'
          fullWidth variants="outlined" 
          name='email' 
          />
        <FormLabel>contactNumber</FormLabel>
        <TextField
         value={inputs.contactNumber}
         onChange={handleChange}
         margin='normal' 
         fullWidth variants="outlined"
          name='contactNumber'
           />
        

        <Button variant='contained' type='submit'>Add User</Button>

      </Box>

    </form>
  )
}

export default AddUser