import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import Image from 'next/image'
import { useScrollLock } from '@/hook/use-scroll-lock'
import { useModal } from '@/store/modal'
import FocusLock from 'react-focus-lock'

import styles from './Modal.module.scss'

export default function Modal() {
  const modalRef = useRef(null)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { active, setActive, activeName } = useModal()

  const handleButtonClose = () => {
    setActive(false)
  }

  const handleEscapeKeydown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      handleButtonClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (active && modalRef.current) {
      document.addEventListener('keydown', handleEscapeKeydown)
      lockScroll()
    }

    return () => {
      unlockScroll()
      document.removeEventListener('keydown', handleEscapeKeydown)
    }
  }, [active, handleEscapeKeydown, lockScroll, unlockScroll])

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validateEmail(email)) {
      alert('Email is valid!')
      setError('')
    } else {
      setError('Please enter a valid email address.')
    }
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <FocusLock returnFocus disabled={!active}>
      <div
        ref={modalRef}
        className={
          active ? `${styles.modal} ${styles['modal--active']}` : styles.modal
        }
      >
        <div className={styles['modal__wrapper']}>
          {/* <div className={styles['modal__overlay']} onClick={() => handleButtonClose()}></div> */}
          <div className={styles['modal__content']}>
            <h1 className={styles['modal__title']}>Your name</h1>
            <p className={styles['modal__name']}>{activeName}</p>
            <form onSubmit={handleSubmit}>
              <div className={styles['modal__input']}>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className={styles['modal__policy']}>
                <Image
                  src={'img/svg/icon-block.svg'}
                  width={16}
                  height={17}
                  alt="Your information is 100% secure"
                />
                <p>
                  Your information is 100% secure. We don’t share your personal
                  information.
                </p>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button className={styles['modal__btn']} type="submit">
                Continue
              </button>
            </form>
            <button
              className={styles['modal__close']}
              onClick={handleButtonClose}
            >
              <Image
                src={'img/svg/icon-close.svg'}
                width={24}
                height={24}
                alt="Close modal"
              />
            </button>
          </div>
        </div>
      </div>
    </FocusLock>
  )
}
