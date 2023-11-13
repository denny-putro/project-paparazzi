import styles from './Result.module.css'

export default function Result({src, srcResult, landscape, facingMode}) {

    return (
      <div className={styles.container}>
        <img src={src} alt="result" className={
            (landscape=="true") ? 
                styles.resultRotate
                : 
                (facingMode=="user") ? styles.result : styles.resultFlip
            } 
        />
        <img src={srcResult} alt="result" className={styles.guideline} />
      </div>
    )
  }