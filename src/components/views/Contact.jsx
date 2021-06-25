import React, { useState } from 'react';
import FormInput from '../commons/FormInput';
import PrimaryButton from '../commons/PrimaryButton';
import SecondaryButton from '../commons/SecondaryButton';
import MainLayout from '../layouts/MainLayout';

function Contact() {
  const formDefault = {
    email: '',
    subject: '',
    content: '',
  };
  const [form, setForm] = useState(formDefault);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const reset = () => {
    setForm(formDefault);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(form));
    reset();
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit}>
        <div>Nous contacter :</div>
        <FormInput
          type="email"
          name="email"
          text="Email"
          placeholder="your@email.here"
          value={form.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="subject"
          text="Subject"
          placeholder="Subject..."
          value={form.subject}
          onChange={handleChange}
          required
        />
        <label htmlFor="content">
          <span>Content:</span>
          <textarea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
          />
        </label>
        <div>
          <SecondaryButton onClick={reset}>Reset</SecondaryButton>
          <PrimaryButton type="submit">Send</PrimaryButton>
        </div>
      </form>
    </MainLayout>
  );
}

export default Contact;
