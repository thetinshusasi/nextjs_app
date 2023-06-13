import React from 'react'
import styles from "./styles.module.css"
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <section>
                <nav>
                    <h2> About page Nav</h2>
                </nav>
                <main className={styles.main}>
                    {children}
                </main>
            </section>

        </>
    )
}
