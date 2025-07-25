"use client"
import Link from "next/link"
import styles from "../../styles/ContactPage.module.css"

export default function ContactPage() {
  return (
    <>
      <div className="w-full min-h-screen" style={{background: "#f5f5f5", padding: "clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)",}}>

        <div className={styles.theme}>
            <h2>Contact</h2>
        </div>

      </div>
    </>
  );
}

