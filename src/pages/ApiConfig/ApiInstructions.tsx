import PageSectionContainer from '../../components/PageSectionContainer';

export default function ApiInstructions() {
  const curlCommand = `curl -X GET 'https://api.proxypilot.com/' \\
    -H 'ApiKey: YOUR_API_KEY' \\
    -H 'AccountID: YOUR_ACCOUNT_ID'`;

  return (
    <PageSectionContainer>
      <h2 className="text-lg font-semibold mb-3">
        Accessing the ProxyPilot API
      </h2>
      <p className="mb-2">
        You can access our API at{' '}
        <a
          href="https://api.proxypilot.com"
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        >
          api.proxypilot.com
        </a>
        . Below is an example of how you can use a curl command to make
        requests:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-3">
        <code>{curlCommand}</code>
      </pre>
      <p>
        For more detailed information, check out our{' '}
        <a
          href="https://api.proxypilot.com/docs"
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        >
          API documentation
        </a>
        .
      </p>
    </PageSectionContainer>
  );
}
