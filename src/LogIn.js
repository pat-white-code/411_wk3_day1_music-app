import React from 'react';

const LogIn = (props) => {
  const {logIn} = props
  return(
    <div>
      <h1>PLEASE LOG IN</h1>
      <form onSubmit={logIn}>
        <input type='text'></input>
      </form>
    </div>
  )
}

export default LogIn;