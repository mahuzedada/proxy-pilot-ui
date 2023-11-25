import Account from './Account';
import Theme from './Theme';
import Profile from './Profile';

export default function Preferences() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Preferences</h2>
      <Account email="chatis@mail.com" password="alibababa" />
      <Profile firstName="Chatis" lastName="Santos" />
      <Theme />
    </div>
  );
}
