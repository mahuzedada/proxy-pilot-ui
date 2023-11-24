import { useEffect, useState } from 'react';
import get from '../../lib/get';

export default function JobStatus({ domain }) {
  const [jobData, setJobData] = useState<any | null>(null);

  useEffect(() => {
    async function fetchJobStatus() {
      try {
        const data = await get(`/${domain}`);
        setJobData(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchJobStatus();
  }, []);

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {jobData ? (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Job Status
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Domain: {jobData.domain}
          </p>
          <p className="font-semibold">Proxy Status: {jobData.proxyStatus}</p>
          {jobData.proxyStatus === 'active' && (
            <div className="mt-4 p-2 bg-green-100 text-green-800 text-sm rounded-lg">
              The certificate has been successfully set up.
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
