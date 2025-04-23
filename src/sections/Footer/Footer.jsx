import styles from './FooterStyles.module.css'
function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            &copy; {/*copy right symbol code */} 
            2025 Tien Yi Lee. 
            <br />
            All Rights Reserverd
        </p>
    </section>
  )
}

export default Footer