import styles from './Guideline.module.css'

export default function Guideline({guideline}) {

    return (
      <>
        <img src={guideline} alt="guideline" className={styles.guideline} />
      </>
    )
  }