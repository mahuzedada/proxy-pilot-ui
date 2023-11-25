import useCertificates from '../../hooks/useCertificates';
import PageSectionContainer from '../../components/PageSectionContainer';
import Button from '../../components/utility/Button';
import { Link } from 'react-router-dom';
import ProxyRow from './ProxyRow';

export default function ProxyList() {
  const certificates = useCertificates();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        SSL Certificates
      </h2>
      <PageSectionContainer>
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <Link to="/domain/new">
            <Button variant="primary">New domain</Button>
          </Link>
          <Button>Check All Certificates</Button>
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
                  <ProxyRow
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
    </div>
  );
}
