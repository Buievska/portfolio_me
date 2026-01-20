"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      alert("Thank you! The message was sent successfully.");
      formRef.current.reset();
    } catch (error) {
      console.error("Sending error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={styles.contactsSection} id="contact">
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>Let&apos;s create something together!</p>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.contactCard}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="user_name"
                className={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>E-mail</label>
              <input
                type="email"
                name="user_email"
                className={styles.input}
                placeholder="example@mail.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Comment</label>
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Tell me about your project: What goals do you have? Do you have a deadline or a specific style in mind?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.sendBtn}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
