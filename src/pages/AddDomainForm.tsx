import React from 'react';
import { useForm } from 'react-hook-form';
import post from '../lib/post';
import Button from '../components/utility/Button';
import { useNavigate } from 'react-router-dom';

export default function AddDomainForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState<{
    message: string;
    statusCode: number;
  } | null>(null);

  const onSubmit = async (data) => {
    try {
      const res = await post('', {
        ...data,
        userId: '83396b1d-80fa-4b8d-a0a3-6292ac7683a9',
      });
      console.log({ data, res });
    } catch (e) {
      setError(e.response.data);
    }
  };

  const isValidDomain = (value) => {
    // Check if the value starts with http:// or https://
    if (/^(http:\/\/|https:\/\/)/.test(value)) {
      return 'Please remove http:// or https:// from the domain';
    }

    // Regular expression to validate the domain format
    const domainRegex =
      /^(?!:\/\/)([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return domainRegex.test(value) || 'Invalid domain format';
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {...register('domain', { required: true, validate: isValidDomain })}
          />
          {errors.domain && (
            <p className="text-red-500">
              {errors.domain.message || 'Domain is required'}
            </p>
          )}
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
            {...register('targetDomain', {
              required: true,
              validate: isValidDomain,
            })}
          />
          {errors.targetDomain && (
            <p className="text-red-500">
              {errors.targetDomain.message || 'Target Domain is required'}
            </p>
          )}
        </div>

        <div className="flex items-center justify-left gap-3">
          <Button onClick={() => navigate(-1)} variant="danger">
            cancel
          </Button>
          <Button variant="neutral" type="submit">
            Create SSL Certificate
          </Button>
        </div>
      </form>
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{error.message}</p>
          {error.statusCode === 422 && (
            <div className="mt-4">
              <p className="font-bold">Resolution Steps:</p>
              <ol className="list-decimal ml-5">
                <li>
                  Access Your DNS Settings: Log in to your domain registrar's
                  website or your DNS provider's control panel.
                </li>
                <li>
                  Navigate to DNS Management: Look for the 'DNS Management',
                  'Name Server Management', or similar section.
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
      )}
    </div>
  );
}
