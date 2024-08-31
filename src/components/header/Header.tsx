import BtnVPN from '../btn-vpn/BtnVPN'
import Logo from '../logo/Logo'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <BtnVPN className="header" />
    </header>
  )
}
