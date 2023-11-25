import PageContainer from '../../components/PageContainer';
import NotificationTypes from './NotificationTypes';
import NotificationSchedule from './NotificationSchedule';

export default function Notifications() {
  return (
    <PageContainer title="Notifications">
      <NotificationTypes />
      <NotificationSchedule />
    </PageContainer>
  );
}
