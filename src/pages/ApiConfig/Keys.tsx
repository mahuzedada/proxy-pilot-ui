import Button from '../../components/utility/Button';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../../components/utility/InputField';

export default function Keys() {
  const form = useForm({
    defaultValues: {
      accountId: '1123231',
      apiKey: 'existingkey',
    },
  });

  const regenerateApiKey = () => {
    const newApiKey = 'newGeneratedApiKey12345';
    form.setValue('apiKey', newApiKey);
  };
  return (
    <FormProvider {...form}>
      <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          Integration Settings
        </h3>
        <div className="mb-4">
          <div className="flex items-center md:items-start space-x-4">
            <div className="flex-1">
              <InputField name="accountId" disabled rules={{}} />
            </div>
            <Button>Copy</Button>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center md:items-start space-x-4">
            <div className="flex-1">
              <InputField name="apiKey" disabled rules={{}} />
            </div>
            <Button onClick={regenerateApiKey}>Regenerate</Button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
