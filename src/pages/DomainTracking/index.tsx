import PageContainer from '../../components/PageContainer';
import Button from '../../components/utility/Button';
import PageSectionContainer from '../../components/PageSectionContainer';
import { Link } from 'react-router-dom';
import DomainRow from './DomainRow';

export type CertificateInfo = {
  domain: string;
  issuer: string;
  expiryDate: string; // local date time
  lastChecked: string; // local date time
};

const certificates: CertificateInfo[] = [
  {
    domain: 'example1.com',
    issuer: 'Issuer A',
    expiryDate: '2024-01-01T00:00:00',
    lastChecked: '2023-11-25T12:00:00',
  },
  {
    domain: 'example2.com',
    issuer: 'Issuer B',
    expiryDate: '2024-02-02T00:00:00',
    lastChecked: '2023-11-25T12:01:00',
  },
  {
    domain: 'example3.com',
    issuer: 'Issuer C',
    expiryDate: '2024-03-03T00:00:00',
    lastChecked: '2023-11-25T12:02:00',
  },
  {
    domain: 'example4.com',
    issuer: 'Issuer D',
    expiryDate: '2024-04-04T00:00:00',
    lastChecked: '2023-11-25T12:03:00',
  },
  {
    domain: 'example5.com',
    issuer: 'Issuer E',
    expiryDate: '2024-05-05T00:00:00',
    lastChecked: '2023-11-25T12:04:00',
  },
  {
    domain: 'example6.com',
    issuer: 'Issuer F',
    expiryDate: '2024-06-06T00:00:00',
    lastChecked: '2023-11-25T12:05:00',
  },
  {
    domain: 'example7.com',
    issuer: 'Issuer G',
    expiryDate: '2024-07-07T00:00:00',
    lastChecked: '2023-11-25T12:06:00',
  },
  {
    domain: 'example8.com',
    issuer: 'Issuer H',
    expiryDate: '2024-08-08T00:00:00',
    lastChecked: '2023-11-25T12:07:00',
  },
  {
    domain: 'example9.com',
    issuer: 'Issuer I',
    expiryDate: '2024-09-09T00:00:00',
    lastChecked: '2023-11-25T12:08:00',
  },
  {
    domain: 'example10.com',
    issuer: 'Issuer J',
    expiryDate: '2024-10-10T00:00:00',
    lastChecked: '2023-11-25T12:09:00',
  },
  {
    domain: 'example11.com',
    issuer: 'Issuer K',
    expiryDate: '2024-11-11T00:00:00',
    lastChecked: '2023-11-25T12:10:00',
  },
  {
    domain: 'example12.com',
    issuer: 'Issuer L',
    expiryDate: '2024-12-12T00:00:00',
    lastChecked: '2023-11-25T12:11:00',
  },
  {
    domain: 'example13.com',
    issuer: 'Issuer M',
    expiryDate: '2025-01-13T00:00:00',
    lastChecked: '2023-11-25T12:12:00',
  },
  {
    domain: 'example14.com',
    issuer: 'Issuer N',
    expiryDate: '2025-02-14T00:00:00',
    lastChecked: '2023-11-25T12:13:00',
  },
  {
    domain: 'example15.com',
    issuer: 'Issuer O',
    expiryDate: '2025-03-15T00:00:00',
    lastChecked: '2023-11-25T12:14:00',
  },
  {
    domain: 'example16.com',
    issuer: 'Issuer P',
    expiryDate: '2025-04-16T00:00:00',
    lastChecked: '2023-11-25T12:15:00',
  },
  {
    domain: 'example17.com',
    issuer: 'Issuer Q',
    expiryDate: '2025-05-17T00:00:00',
    lastChecked: '2023-11-25T12:16:00',
  },
  {
    domain: 'example18.com',
    issuer: 'Issuer R',
    expiryDate: '2025-06-18T00:00:00',
    lastChecked: '2023-11-25T12:17:00',
  },
  {
    domain: 'example19.com',
    issuer: 'Issuer S',
    expiryDate: '2025-07-19T00:00:00',
    lastChecked: '2023-11-25T12:18:00',
  },
  {
    domain: 'example20.com',
    issuer: 'Issuer T',
    expiryDate: '2025-08-20T00:00:00',
    lastChecked: '2023-11-25T12:19:00',
  },
  {
    domain: 'example21.com',
    issuer: 'Issuer U',
    expiryDate: '2025-09-21T00:00:00',
    lastChecked: '2023-11-25T12:20:00',
  },
  {
    domain: 'example22.com',
    issuer: 'Issuer V',
    expiryDate: '2025-10-22T00:00:00',
    lastChecked: '2023-11-25T12:21:00',
  },
  {
    domain: 'example23.com',
    issuer: 'Issuer W',
    expiryDate: '2025-11-23T00:00:00',
    lastChecked: '2023-11-25T12:22:00',
  },
  {
    domain: 'example24.com',
    issuer: 'Issuer X',
    expiryDate: '2025-12-24T00:00:00',
    lastChecked: '2023-11-25T12:23:00',
  },
  {
    domain: 'example25.com',
    issuer: 'Issuer Y',
    expiryDate: '2026-01-25T00:00:00',
    lastChecked: '2023-11-25T12:24:00',
  },
  {
    domain: 'example26.com',
    issuer: 'Issuer Z',
    expiryDate: '2026-02-26T00:00:00',
    lastChecked: '2023-11-25T12:25:00',
  },
  {
    domain: 'example27.com',
    issuer: 'Issuer AA',
    expiryDate: '2026-03-27T00:00:00',
    lastChecked: '2023-11-25T12:26:00',
  },
  {
    domain: 'example28.com',
    issuer: 'Issuer BB',
    expiryDate: '2026-04-28T00:00:00',
    lastChecked: '2023-11-25T12:27:00',
  },
  {
    domain: 'example29.com',
    issuer: 'Issuer CC',
    expiryDate: '2026-05-29T00:00:00',
    lastChecked: '2023-11-25T12:28:00',
  },
  {
    domain: 'example30.com',
    issuer: 'Issuer DD',
    expiryDate: '2026-06-30T00:00:00',
    lastChecked: '2023-11-25T12:29:00',
  },
];

export default function DomainTracking() {
  return (
    <PageContainer title="Domain Tracking">
      <PageSectionContainer>
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <Link to="/domain/new">
            <Button variant="primary">Tack ew domain</Button>
          </Link>
          <Button>Check All Domains</Button>
        </div>
        {certificates.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                    Domain
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                    Issuer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                    Last Checked
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {certificates.map((certificate) => (
                  <DomainRow
                    key={certificate.domain}
                    certificate={certificate}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="dark:text-white">No certificates found.</p>
        )}{' '}
      </PageSectionContainer>
    </PageContainer>
  );
}
