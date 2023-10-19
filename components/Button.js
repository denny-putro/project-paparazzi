import styles from './Button.module.css'
import Link from 'next/link';

export default function Button({title, link, overlay}) {
    
  return (
    <>
      <Link href={{ pathname: link, query: { overlay: overlay } }}>
        <div className={styles.button}>
          {title}
        </div>
      </Link>
    </>
  )
}