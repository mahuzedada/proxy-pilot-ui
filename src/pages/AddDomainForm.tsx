import React, { useState } from 'react';

export default function AddDomainForm() {
  const [domain, setDomain] = useState('');
  const [targetDomain, setTargetDomain] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Domain:', domain, 'Target Domain:', targetDomain);
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="domain"
          >
            Domain
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="domain"
            type="text"
            placeholder="Enter your domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="targetDomain"
          >
            Target Domain
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="targetDomain"
            type="text"
            placeholder="Enter the target domain"
            value={targetDomain}
            onChange={(e) => setTargetDomain(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create SSL Certificate
          </button>
        </div>
      </form>
    </div>
  );
}
