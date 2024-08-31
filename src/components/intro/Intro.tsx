import Image from 'next/image'

import BtnVPN from '../btn-vpn/BtnVPN'
import styles from './Intro.module.scss'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles['intro__container']}>
        <h1 className={styles['intro__title']}>
          Access&nbsp;
          <span className={styles['text-color']}>
            everything <br /> securely&nbsp;
          </span>
          with <br /> VPN
        </h1>
        <div className={styles['intro__img']}>
          <Image
            src={'img/layuot/intro@2x.png'}
            alt="Everobody need VPN"
            width={541}
            height={211}
          />
        </div>

        <div className={styles['intro__btn-vpn']}>
          <BtnVPN className="intro" />
        </div>
        <div className={styles['intro__img-users']}>
          <Image
            src={'img/layuot/users-amount@2x.png'}
            alt="More than 50 millions users trust us"
            width={136}
            height={42}
          />
        </div>

        <div className={styles['intro__user-reach']}>
          <div className={styles['intro__reach-item']}>
            <Image
              src={'img/svg/location.svg'}
              alt="More than 50 locations"
              width={25}
              height={24}
            />
            <div className={styles['intro__reach-text']}>
              <b className={styles['intro__reach-count']}>50+</b>
              <span className={styles['intro__reach-description']}>
                Locations
              </span>
            </div>
          </div>
          <div className={styles['intro__reach-item']}>
            <Image
              src={'img/svg/fork.svg'}
              alt="More than 1000 servers"
              width={25}
              height={24}
            />
            <div className={styles['intro__reach-text']}>
              <b className={styles['intro__reach-count']}>1000+</b>
              <span className={styles['intro__reach-description']}>
                Servers
              </span>
            </div>
          </div>
        </div>
        <p className={styles['intro__footer']}>
          VPN-your
          <span className={styles['text-color']}>&nbsp;ultimate&nbsp;</span>
          solution for a private and secure online experience!
        </p>
      </div>
    </section>
  )
}
