import Benefits from '@/components/benefits/Benefits'
import ChooseName from '@/components/choose-name/ChooseName'
import Intro from '@/components/intro/Intro'

import container from '../styles/container.module.scss'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={`${styles.main} ${container['main-container']}`}>
      <Intro />
      <div>
        <Benefits />
        <p className={styles.text}>Millions of people trust us!</p>
      </div>
      <ChooseName />
    </div>
  )
}
