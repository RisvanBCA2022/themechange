import React,{ useState } from 'react'
import './App.css'

const App=()=>{
  const [DarkTheme,setDark]=useState(false);
  
  const themechange = () =>{
    setDark(!DarkTheme);
  }

  const theme={
    backgroundColor:DarkTheme? '#000' : '#fff',
    color: DarkTheme? '#fff' : '#000',
    minHeight:'100vh',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  };

  return (
    <>
    <div style={theme}>
      <button onClick={themechange}>switch Theme</button><br></br>
     
    </div>

    </>
  )
}

export default App;
