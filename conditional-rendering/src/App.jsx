import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Steven" />
      <UserGreeting />
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App
