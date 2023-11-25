import { SSLCertificate } from '../../models';
import deleteMethod from '../../lib/deleteMethod';
import Button from '../../components/utility/Button';
import dayjs from 'dayjs';

type Props = {
  certificate: SSLCertificate;
};
export default function ProxyRow({ certificate }: Props) {
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
