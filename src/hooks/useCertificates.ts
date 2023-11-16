import { useEffect, useState } from 'react';
import get from '../lib/get';
import { SSLCertificate } from '../models';

export default function useCertificates() {
  const [certificates, setCertificates] = useState<SSLCertificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      setCertificates(
        await get('/user/83396b1d-80fa-4b8d-a0a3-6292ac7683a9/domains')
      );
    };

    fetchCertificates();
  }, []);

  return certificates;
}
