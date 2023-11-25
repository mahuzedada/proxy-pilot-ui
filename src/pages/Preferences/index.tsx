import Account from './Account';
import Theme from './Theme';
import Profile from './Profile';
import PageContainer from '../../components/PageContainer';

export default function Preferences() {
  return (
    <PageContainer title="Preferences">
      <Account email="chatis@mail.com" password="alibababa" />
      <Profile firstName="Chatis" lastName="Santos" />
      <Theme />
    </PageContainer>
  );
}
