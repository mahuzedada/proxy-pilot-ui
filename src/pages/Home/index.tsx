import WelcomeBanner from './WelcomeBanner';
import QuickStatsPanel from './QuickStatsPanel';
import QuickActionButtons from './QuickActionButtons';
import RecentActivitySection from './RecentActivitySection';
import SSLExpiryAlertSection from './SSLExpiryAlertSection';
import Footer from './Footer';

const mockStats = {
  totalDomains: 10,
  activeCertificates: 7,
  pendingRequests: 3,
};

const mockActivities = [
  { id: '1', domainName: 'example.com', status: 'Active', date: '2023-11-01' },
  { id: '2', domainName: 'sample.net', status: 'Pending', date: '2023-11-02' },
];

const mockCertificates = [
  { id: '1', domainName: 'example.com', expiryDate: '2024-01-01' },
  { id: '2', domainName: 'about.org', expiryDate: '2023-12-15' },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4">
        <WelcomeBanner />
        <QuickStatsPanel
          totalDomains={mockStats.totalDomains}
          activeCertificates={mockStats.activeCertificates}
          pendingRequests={mockStats.pendingRequests}
        />
        <QuickActionButtons />
        <RecentActivitySection activities={mockActivities} />
        <SSLExpiryAlertSection certificates={mockCertificates} />
      </main>
      <Footer />
    </div>
  );
}
