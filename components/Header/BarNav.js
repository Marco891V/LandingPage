import { Navbar as UINavBar, NavItem as UINavItem, NavLink as UINavLink, Nav as UINav } from 'reactstrap'
import styles from '../../styles/Landing.module.css'

const Navbar = (props) => {
  const title = props.title
  
  return (
    <UINavBar className={styles.nav}>
      <UINav>
        <UINavItem>
          <UINavLink>
            {title}
          </UINavLink>
        </UINavItem>
      </UINav>
    </UINavBar>
  )
}

export default Navbar