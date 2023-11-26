import { ApiError } from './index';

export default function Error({ message, statusCode }: ApiError) {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>{message}</p>
      {statusCode === 422 && (
        <div className="mt-4">
          <p className="font-bold">Resolution Steps:</p>
          <ol className="list-decimal ml-5">
            <li>
              Access Your DNS Settings: Log in to your domain registrar's
              website or your DNS provider's control panel.
            </li>
            <li>
              Navigate to DNS Management: Look for the 'DNS Management', 'Name
              Server Management', or similar section.
            </li>
            <li>
              Add an A Record: Choose 'A' as the record type, enter the IP
              address `18.191.75.83`, then set the TTL as recommended.
            </li>
            <li>
              Save the Changes: After entering the details, save the new A
              record.
            </li>
            <li>
              Wait for Propagation: DNS changes can take up to 48 hours to
              propagate worldwide.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
