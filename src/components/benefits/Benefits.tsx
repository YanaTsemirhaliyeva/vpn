import Image from 'next/image'

import { BENEFITS } from './benefits-data'
import styles from './Benefits.module.scss'

export default function Benefits() {
  return (
    <ul className={styles.benefits}>
      {BENEFITS.map((benefit, i) => {
        const { icon, title, description } = benefit
        const title1 = title.split(' ')[0]
        const title2 = title.split(' ').slice(1).join(' ')

        return (
          <li key={i} className={styles['benefits__item']}>
            <Image src={icon} alt="benefit icon" width={104} height={52} />
            <h2 className={styles['benefits__title']}>
              <span className={styles['benefits__title--1']}>{title1}</span>
              <br />
              <span className={styles['benefits__title--2']}>{title2}</span>
            </h2>
            <p className={styles['benefits__description']}>{description}</p>
          </li>
        )
      })}
    </ul>
  )
}
