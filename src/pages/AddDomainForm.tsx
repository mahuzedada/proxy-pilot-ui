import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import post from '../lib/post';
import Button from '../components/utility/Button';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/utility/InputField';

export default function AddDomainForm() {
  const navigate = useNavigate();
  const form = useForm();
  const { handleSubmit } = form;
  const [apiError, setApiError] = React.useState<{
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
      setApiError(e.response.data);
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
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <InputField
              name="domain"
              options={{
                required: true,
                validate: isValidDomain,
              }}
            />
          </div>

          <div className="mb-6">
            <InputField
              name="targetDomain"
              options={{
                required: true,
                validate: isValidDomain,
              }}
            />
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
      </FormProvider>

      {apiError && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{apiError.message}</p>
          {apiError.statusCode === 422 && (
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
