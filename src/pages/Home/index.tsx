import WelcomeBanner from './WelcomeBanner';
import QuickStatsPanel from './QuickStatsPanel';
import QuickActionButtons from './QuickActionButtons';
import RecentActivitySection from './RecentActivitySection';
import SSLExpiryAlertSection from './SSLExpiryAlertSection';
import Footer from './Footer';
import useCertificates from '../../hooks/useCertificates';
import getSummaryData from './getSummaryData';

export default function Dashboard() {
  const certificates = useCertificates();
  const {
    activeCertificateCount,
    inactiveCertificateCount,
    mostRecentCertificates,
    totalDomains,
    soonToExpire,
  } = getSummaryData(certificates);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4">
        <WelcomeBanner />
        <QuickStatsPanel
          totalDomains={totalDomains}
          activeCertificateCount={activeCertificateCount}
          inactiveCertificateCount={inactiveCertificateCount}
        />
        <QuickActionButtons />
        <RecentActivitySection activities={mostRecentCertificates} />
        <SSLExpiryAlertSection certificates={soonToExpire} />
      </main>
      <Footer />
    </div>
  );
}
