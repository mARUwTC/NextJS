import styles from '../styles/Navbar.module.css';
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className={styles.Navbar}>
            <Link href="/"><a className={styles.active}>Home</a></Link>
        </div>
    )
}