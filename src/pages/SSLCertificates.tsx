import dayjs from 'dayjs';
import { SSLCertificate } from '../models';
import useCertificates from '../hooks/useCertificates';
import deleteMethod from '../lib/deleteMethod';
import Button from '../components/utility/Button';
import { Link } from 'react-router-dom';

function SSLCertificates() {
  const certificates = useCertificates();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        SSL Certificates
      </h2>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <Link to="/domain/new">
            <Button variant="blue">New domain</Button>
          </Link>
          <Button>Renew All Certificates</Button>
        </div>
        {renderCertificateTable(certificates)}
      </div>
    </div>
  );
}

function renderCertificateTable(certificates: SSLCertificate[]) {
  return certificates.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Domain
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Target Domain
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Expiry Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {certificates.map((certificate) => (
            <CertificateRow
              key={certificate.domain}
              certificate={certificate}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="dark:text-white">No certificates found.</p>
  );
}

function CertificateRow({ certificate }: { certificate: SSLCertificate }) {
  const handleRevoke = async (domain: string) => {
    await deleteMethod(`/${domain}`);
  };

  const daysUntilExpiry = dayjs(certificate.expiryDate).diff(dayjs(), 'day');
  const isExpired = daysUntilExpiry < 0;
  const isExpiringSoon = daysUntilExpiry >= 0 && daysUntilExpiry <= 30;

  let expiryTextStyle = 'text-sm text-gray-500 dark:text-gray-300';
  let expiryText = `Expires in ${daysUntilExpiry} days: ${certificate.expiryDate}`;

  if (isExpired) {
    expiryTextStyle = 'text-sm text-red-500 dark:text-red-400';
    expiryText = `Expired ${Math.abs(daysUntilExpiry)} days ago on ${
      certificate.expiryDate
    }`;
  } else if (isExpiringSoon) {
    expiryTextStyle = 'text-sm text-red-500 dark:text-red-400';
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {certificate.domain}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {certificate.targetDomain}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        <Button variant="success">ok</Button>
      </td>
      <td className={expiryTextStyle}>{expiryText}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Button
          onClick={() => handleRevoke(certificate.domain)}
          variant="danger"
        >
          Revoke
        </Button>
      </td>
    </tr>
  );
}

export default SSLCertificates;
