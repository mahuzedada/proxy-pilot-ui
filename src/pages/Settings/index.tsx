import Account from './Account';
import ApiConfig from './ApiConfig';
import Profile from './Profile';

export default function Settings() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <Account email="" password="" />
      <Profile firstName="" lastName="" />
      <ApiConfig />
    </div>
  );
}
