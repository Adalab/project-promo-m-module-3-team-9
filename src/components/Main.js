import Card from './Card';
import Form from './Form';
import React, {useState, useEffect, createRef} from 'react';
import ls from '../services/localstorage';

function Main() {
  const localStorageForm = ls.get('form') || {};

  const [form, setForm] = useState(
    localStorageForm.form || {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
      palette: '1',
    }
  );

  useEffect(() => {
    ls.set('form', {form});
  }, [form]);

  const handleReset = () => {
    setForm(
      {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
        palette: '1',
      },
      document.getElementById('reset').reset()
    );
    localStorage.clear();
  };

  const handleOnKeyUp = (ev) => {
    setForm({...form, [ev.target.name]: ev.target.value});
  };

  const handleOnChange = (ev) => {
    setForm({...form, [ev.target.name]: ev.target.value});
  };

  const updateAvatar = (avatar) => {
    //setAvatar(avatar);
    setForm({
      ...form,
      photo: avatar,
    });
  };

  return (
    <main className="main_card--background">
      <div className="main_card">
        <Card {...form} handleOnClickReset={handleReset} />
        <Form
          updateAvatar={updateAvatar}
          {...form}
          onKeyUp={handleOnKeyUp}
          onClick={handleOnChange}
          // palette={palette}
        />
      </div>
    </main>
  );
}

export default Main;
