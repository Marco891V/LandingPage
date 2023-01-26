import { SiNextdotjs } from 'react-icons/si'
import styles from '../../styles/NavBar.module.css'

const Navbar = (props) => {
  const title = props.title;
  const href = props.href;
  
  return (
    <div className={styles.topnav}>
      <a className={styles.topnavIcon} href={href}><SiNextdotjs />&nbsp;Latana</a>
      <a className={styles.topnavA} href={href}>Why Latana?</a>
      <a className={styles.topnavA} href={href}>Product</a>
      <a className={styles.topnavA} href={href}>Roles</a>
      <a className={styles.topnavA} href={href}>Resources</a>
      <a className={styles.topnavA} href={href}>Pricing</a>
      <a className={styles.topnavA} href={href}>Contact US</a>
      <button className={styles.buttonNav}>Book Demo</button> 
      <a className={styles.topnavLogin} href={href}> Log In</a> 
    </div>
  )
}

export default Navbar