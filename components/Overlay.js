import styles from './Overlay.module.css'

export default function Overlay({overlay}) {

    return (
      <>
        <img src={overlay} alt="overlay" className={styles.overlay} />
      </>
    )
  }