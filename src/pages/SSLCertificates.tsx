import { useState, useEffect } from 'react';

interface SSLCertificate {
  id: string;
  domainName: string;
  status: string;
  targetDomain: string;
  issuedDate: string;
  expiryDate: string;
}

function SSLCertificates() {
  const [certificates, setCertificates] = useState<SSLCertificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData: SSLCertificate[] = [
        {
          id: '1',
          domainName: 'example.com',
          targetDomain: 'target.sample.net',
          status: 'Active',
          issuedDate: '2021-01-01',
          expiryDate: '2022-01-01',
        },
        {
          id: '2',
          domainName: 'sample.net',
          targetDomain: 'target.sample.net',
          status: 'Pending',
          issuedDate: '2022-06-15',
          expiryDate: '2023-06-15',
        },
        // Add more mock certificates as needed
      ];

      setCertificates(mockData);
    };

    fetchCertificates();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">SSL Certificates</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {certificates.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {certificates.map((certificate) => (
              <CertificateItem key={certificate.id} certificate={certificate} />
            ))}
          </ul>
        ) : (
          <p>Loading SSL certificates...</p>
        )}
      </div>
    </div>
  );
}

function CertificateItem({ certificate }: { certificate: SSLCertificate }) {
  const handleRenew = (id: string) => {
    console.log('Renew Certificate:', id);
  };

  const handleRevoke = (id: string) => {
    console.log('Revoke Certificate:', id);
  };
  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-900">
          {certificate.domainName}
        </p>
        <p className="text-sm text-gray-500">
          Target Domain: {certificate.targetDomain}
        </p>
        <p className="text-sm text-gray-500">Status: {certificate.status}</p>
        <p className="text-sm text-gray-500">
          Issued: {certificate.issuedDate}
        </p>
        <p className="text-sm text-gray-500">
          Expires: {certificate.expiryDate}
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => handleRenew(certificate.id)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
        >
          Renew
        </button>
        <button
          onClick={() => handleRevoke(certificate.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Revoke
        </button>
      </div>{' '}
    </li>
  );
}

export default SSLCertificates;
