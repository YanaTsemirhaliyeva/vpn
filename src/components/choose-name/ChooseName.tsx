'use client'

import { KeyboardEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { useModal } from '@/store/modal'
import { useUsers } from '@/store/users'

import BtnVPN from '../btn-vpn/BtnVPN'
import styles from './ChooseName.module.scss'
import { User } from './user-data'

export default function ChooseName() {
  const { users: data, loading, getUsers } = useUsers()
  useEffect(() => {
    if (data.length === 0) {
      getUsers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [activeName, setActiveName] = useState<string | null>(null)
  const { setActiveName: setName } = useModal()

  useEffect(() => {
    if (activeName === null) {
      setName('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeName])

  if (!data && loading) return <div>Loading...</div>

  const handleChange = (uuid: string, name: string) => {
    setActiveName((prev) => (prev === uuid ? null : uuid))
    setName(activeName === null ? '' : name)
  }

  const handleEnterClick = (
    evt: KeyboardEvent<HTMLLIElement>,
    uuid: string,
    name: string
  ) => {
    if (evt.key === 'Enter') {
      handleChange(uuid, name)
    }
  }

  return (
    <section className={styles['choose-name']} id="choose-name">
      <h2 className={styles['choose-name__title']}>
        Choose
        <span className={styles['choose-name__title--color']}>
          &nbsp;your name
        </span>
      </h2>
      <ul className={styles['choose-name__list']}>
        {data.map((user: User) => (
          <li
            className={styles['choose-name__item']}
            key={user.login.uuid}
            onClick={() =>
              handleChange(
                user.login.uuid,
                `${user.name.first} ${user.name.last}`
              )
            }
            onKeyDown={(evt) =>
              handleEnterClick(
                evt,
                user.login.uuid,
                `${user.name.first} ${user.name.last}`
              )
            }
            tabIndex={0}
          >
            <label
              htmlFor={`user-name-${user.login.uuid}`}
              className={styles['choose-name__checkbox']}
            >
              <input
                type="checkbox"
                name={`user-name-${user.login.uuid}`}
                id={`user-name-${user.login.uuid}`}
                className="visually-hidden"
                checked={activeName === user.login.uuid}
                onChange={() =>
                  handleChange(
                    user.login.uuid,
                    `${user.name.first} ${user.name.last}`
                  )
                }
              />
              <span className={styles['choose-name__custom-input']}>
                {activeName === user.login.uuid ? (
                  <Image
                    src="img/svg/checkbox-checked.svg"
                    alt="choose your name"
                    className={styles['choose-name__custom-check']}
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="img/svg/checkbox.svg"
                    alt="choose your name"
                    className={styles['choose-name__custom-check']}
                    width={24}
                    height={24}
                  />
                )}
              </span>
              <span className={styles['checkbox__label']}>
                {user.name.first} {user.name.last}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <BtnVPN className="choose" />
    </section>
  )
}
