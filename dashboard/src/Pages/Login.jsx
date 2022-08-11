import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const { isauth, toggleauth } = useContext(AuthContext);
    let navigate=useNavigate()
    if (isauth)
    {
        return navigate("/")
        }
  return (
      <div>
         <h1>click here to login!</h1>
          <button onClick={toggleauth}>LOGIN</button>
    </div>
  )
}

export default Login