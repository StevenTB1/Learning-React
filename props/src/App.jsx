import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Spongebob" age={"30"} isStudent={true}/>
      <Student name="Patrick" age={41} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={18} isStudent={true}/>
      <Student name="larry"/>
    </>
  );
}

export default App
