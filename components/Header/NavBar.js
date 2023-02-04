import { useState } from 'react'
import { SiNextdotjs } from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from '../../styles/NavBar.module.css'
import { withGetScreen } from 'react-getscreen'

function Navbar(props) {
  const href = props.href;
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = props.isMobile()

  if (isMobile) {
    return (
      <div>
        <div className={styles.topnav}>
          <a className={styles.topnavIcon} href={href}><SiNextdotjs />&nbsp;Latana</a>
          <button
            className={styles.dropbtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
        {isOpen &&
          <div>
            <div className={styles.dropdowncontent}>
              <a className={styles.topnavA} href={href}>Why Latana?</a>
              <a className={styles.topnavA} href={href}>Product</a>
              <a className={styles.topnavA} href={href}>Roles</a>
              <a className={styles.topnavA} href={href}>Resources</a>
              <a className={styles.topnavA} href={href}>Pricing</a>
              <a className={styles.topnavA} href={href}>Contact US</a>
            </div>
          </div>
        }
      </div>
    );
  } else {
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
    );
  }
}

export default withGetScreen(Navbar); 