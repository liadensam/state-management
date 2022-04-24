import Link from "next/link"
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.link}>Home</a>
            </Link>
            <Link href="/counter/counter-use-state">
                <a className={styles.link}>useState</a>
            </Link>
            <Link href="/counter/counter-ctx-use-state">
                <a className={styles.link}>CTX useState</a>
            </Link>
            <Link href="/counter/counter-ctx-use-reducer">
                <a className={styles.link}>CTX useReducer</a>
            </Link>
            <Link href="/ecommerce/ecommerce-zustand">
                <a className={styles.link}>Zustand</a>
            </Link>
            <Link href="/ecommerce/ecommerce-context">
                <a className={styles.link}>Context</a>
            </Link>
            <Link href="/ecommerce/ecommerce-context-selector">
                <a className={styles.link}>ContextSelector</a>
            </Link>
        </nav>
    </header>
  )
}

export default Layout