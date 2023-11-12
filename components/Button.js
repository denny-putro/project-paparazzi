import styles from './Button.module.css'
import Link from 'next/link';

export default function Button({title, link, overlay, facingMode, cta, countdown, landscape}) {
    
  return (
    <>
      <Link href={{ pathname: link, query: { overlay: overlay, facingMode:facingMode, countdown:countdown, landscape:landscape } }}>
        <div className={(cta) ? styles.cta : styles.circle}>
          {title}
        </div>
      </Link>
    </>
  )
}