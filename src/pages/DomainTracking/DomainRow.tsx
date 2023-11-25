import { CertificateInfo } from './index';

type Props = {
  certificate: CertificateInfo;
};
export default function DomainRow({ certificate }: Props) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {certificate.domain}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {certificate.issuer}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {certificate.expiryDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {certificate.lastChecked}
      </td>
    </tr>
  );
}
