import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Form.module.css';

const Form = () => {
    const {isDark} = useContext(AuthContext);
  return (
    <div>
        <form className={isDark ? styles.dark:styles.light}>
            <input type="text" placeholder='Enter Your Name'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type="text" placeholder='Enter Your Address'/>
            <input type='password' placeholder='Enter Your Password'/>
            <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default Form