import dayjs from 'dayjs';
import { SSLCertificate } from '../models';
import useCertificates from '../hooks/useCertificates';
import deleteMethod from '../lib/deleteMethod';
import Button from '../components/utility/Button';
import { Link } from 'react-router-dom';

function SSLCertificates() {
  const certificates = useCertificates();

  const activeCertificates = certificates.filter(
    (cert) => cert.certificateStatus === 'active'
  );
  const inactiveCertificates = certificates.filter(
    (cert) => cert.certificateStatus !== 'active'
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">SSL Certificates</h2>
        <Link to="/domain/new">
          <Button variant="neutral">New domain</Button>
        </Link>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-lg font-semibold mb-2">Active Certificates</h3>
        {renderCertificateList(activeCertificates)}
        <h3 className="text-lg font-semibold mb-2 mt-4">
          Inactive Certificates
        </h3>
        {renderCertificateList(inactiveCertificates)}
      </div>
    </div>
  );
}

function renderCertificateList(certificates: SSLCertificate[]) {
  return certificates.length > 0 ? (
    <ul className="divide-y divide-gray-200">
      {certificates.map((certificate) => (
        <CertificateItem key={certificate.domain} certificate={certificate} />
      ))}
    </ul>
  ) : (
    <p>No certificates found.</p>
  );
}

function CertificateItem({ certificate }: { certificate: SSLCertificate }) {
  const handleRevoke = async (domain: string) => {
    await deleteMethod(`/${domain}`);
  };

  const daysUntilExpiry = dayjs(certificate.expiryDate).diff(dayjs(), 'day');
  const isExpired = daysUntilExpiry < 0;
  const isExpiringSoon = daysUntilExpiry >= 0 && daysUntilExpiry <= 30;

  let itemStyle = 'py-3 flex justify-between items-center';
  let expiryTextStyle = 'text-sm text-gray-500';
  let expiryText = `Expires in ${daysUntilExpiry} days: ${certificate.expiryDate}`;

  if (isExpired) {
    itemStyle += ' bg-gray-200';
    expiryTextStyle = 'text-sm text-red-500';
    expiryText = `Expired ${Math.abs(daysUntilExpiry)} days ago on ${
      certificate.expiryDate
    }`;
  } else if (isExpiringSoon) {
    expiryTextStyle = 'text-sm text-red-500';
  }

  return (
    <li className={itemStyle}>
      <div>
        <p className="text-sm font-medium text-gray-900">
          {certificate.domain}
        </p>
        <p className="text-sm text-gray-500">
          Target Domain: {certificate.targetDomain}
        </p>
        <p className="text-sm text-gray-500">
          Certificate Status: {certificate.certificateStatus}
        </p>
        <p className="text-sm text-gray-500">
          Proxy Status: {certificate.proxyStatus}
        </p>
        <p className={expiryTextStyle}>{expiryText}</p>
      </div>
    </li>
  );
}

export default SSLCertificates;
