import Card from './Card';
import Form from './Form';
import {useState} from 'react';

function Main() {
  const [avatar, setAvatar] = useState('');

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <main className="main_card--background">
      <div className="main_card">
        <Card avatar={avatar} />
        <Form updateAvatar={updateAvatar} avatar={avatar} />
      </div>
    </main>
  );
}

export default Main;
