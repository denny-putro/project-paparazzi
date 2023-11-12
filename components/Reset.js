import styles from './Reset.module.css'
import Link from 'next/link';

export default function Reset({title, link, overlay, facingMode, cta, countdown, landscape}) {
    
  return (
    <>
      <Link href={{ pathname: link, query: { overlay: overlay, facingMode:facingMode, countdown:countdown, landscape:landscape } }}>
        <div className={styles.primary}>
          {title}
        </div>
      </Link>
    </>
  )
}