import styles from './Result.module.css'

export default function Result({src, srcResult, landscape}) {

    return (
      <div className={styles.container}>
        <img src={src} alt="result" className={(landscape=="true") ? styles.resultRotate : styles.result} />
        <img src={srcResult} alt="result" className={styles.guideline} />
      </div>
    )
  }