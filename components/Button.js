import styles from './Button.module.css'
import Link from 'next/link';

export default function Button({title, flow, link, overlay, facingMode, cta, countdown, landscape, success}) {
    
  return (
    <>
      <Link href={{ pathname: link, query: { flow: flow, overlay: overlay, facingMode:facingMode, countdown:countdown, landscape:landscape, success:success } }}>
        <div className={(cta) ? styles.cta : styles.circle}>
          {title}
        </div>
      </Link>
    </>
  )
}