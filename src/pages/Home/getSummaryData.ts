import dayjs from 'dayjs';
import { SSLCertificate } from '../../models';

export default function getSummaryData(data: SSLCertificate[]) {
  const activeCertificates = data.filter(
    (item) => item.certificateStatus === 'active'
  );

  return {
    totalDomains: data.length,
    activeCertificateCount: activeCertificates.length,
    inactiveCertificateCount: data.length - activeCertificates.length,
    mostRecentCertificates: data
      .sort((a, b) => dayjs(b.updatedAt).diff(dayjs(a.updatedAt)))
      .slice(0, 3),
    soonToExpire: activeCertificates.filter((item) =>
      dayjs(item.expiryDate).isBefore(dayjs().add(30, 'day'))
    ),
  };
}
