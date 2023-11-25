import { SSLCertificate } from '../../models';

interface SSLExpiryAlertSectionProps {
  certificates: SSLCertificate[];
}

function SSLExpiryAlertSection({ certificates }: SSLExpiryAlertSectionProps) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2 text-red-600">
        SSL Expiry Alerts
      </h2>
      {certificates.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {certificates.map((certificate) => (
            <CertificateItem
              key={certificate.domain}
              certificate={certificate}
            />
          ))}
        </ul>
      ) : (
        <p>No SSL expiry alerts.</p>
      )}
    </div>
  );
}

function CertificateItem({ certificate }: { certificate: SSLCertificate }) {
  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {certificate.domain}
        </p>
        <p className="text-sm text-red-500">
          Expires on: {certificate.expiryDate}
        </p>
      </div>
    </li>
  );
}

export default SSLExpiryAlertSection;
