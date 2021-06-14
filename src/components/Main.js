import Card from './Card';
import Form from './Form';
import {useState} from 'react';

function Main() {
  //const [avatar, setAvatar] = useState("");

  const [form, setForm] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
    palette: '1',
  });

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
        <Card {...form} />
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
