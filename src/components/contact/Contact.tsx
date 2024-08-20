import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import "./Contact.scss";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await emailjs.send(
        'service_zk4rsup',
        'template_4fvz74d',
        formData,
        '24ssIENU5jsaSVmKu'
      );

      if (result.status !== 200) {
        throw new Error('There was an error sending your message.');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <h2 className="title">{t('contact.title')}</h2>
        <div className="mapContainer">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148196.84777259236!2d18.46921283788994!3d54.52334312947387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda145071ed789%3A0xdee2f99989236636!2sGdynia!5e0!3m2!1spl!2spl!4v1724134264694!5m2!1spl!2spl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mapContainerFrame"
            ></iframe>
        </div>
      </div>
      <div>
        <h2 className="form-title">{t('contact.titleForm')}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="form__label">
              {t('contact.name')}
            </label>
          </div>
          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="form__label">
              {t('contact.email')}
            </label>
          </div>
          <div className="form__group field">
            <textarea
              className="form__field"
              placeholder="Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className="form__label">
              {t('contact.message')}
            </label>
          </div>
          <button type="submit" className="form-button" disabled={isSubmitting}>
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </button>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{t('contact.success')}</p>}
        </form>
      </div>
    </>
  );
};

export default Contact;