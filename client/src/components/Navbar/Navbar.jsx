import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Navbar.module.css'
import { Navigate } from 'react-router-dom';

const Navbar = () => {
    const handleClick = () => {
        <Navigate to="/cart" />
    }
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <p>TeeRex Store</p>
        </div>
        <div className={styles.navbar__links}>
            <a href="">Products</a>
            <a href="/cart" onClick={handleClick}><ShoppingCartIcon/></a>
        </div>
    </div>
  )
}

export default Navbar