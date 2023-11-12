import { useState } from 'react';

export default function ApiConfig() {
  const [apiKey, setApiKey] = useState('');
  const [accountId, setAccountId] = useState('');

  const regenerateApiKey = () => {
    const newApiKey = 'newGeneratedApiKey12345';
    setApiKey(newApiKey);
    console.log('New API Key:', newApiKey);
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h3 className="text-lg font-semibold mb-2">Integration Settings</h3>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="accountId"
        >
          Account ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="accountId"
          type="text"
          placeholder="Enter account ID"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="apiKey"
        >
          API Key
        </label>
        <div className="flex items-center space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 flex-grow"
            id="apiKey"
            type="text"
            placeholder="API Key"
            value={apiKey}
            disabled
          />
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={regenerateApiKey}
          >
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}
