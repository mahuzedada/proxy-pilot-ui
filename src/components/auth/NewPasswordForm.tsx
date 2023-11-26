import useTheme from '../../hooks/useTheme';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../utility/Fields/InputField';
import Button from '../utility/Button';
import useAuth from '../../hooks/useAuth';

export default function NewPasswordForm() {
  useTheme();
  const { updatePassword } = useAuth();
  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = (data: { password: string; passwordConfirm: string }) => {
    updatePassword(data.password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-sm w-full bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-4">
          Reset your password
        </h2>
        <FormProvider {...form}>
          <InputField
            type="password"
            size="md"
            name="password"
            hideLabel
            rules={{ required: true }}
          />
          <InputField
            type="password"
            size="md"
            name="passwordConfirm"
            hideLabel
            rules={{
              required: true,
              validate: (value, formValues) => {
                return (
                  value === formValues.password || 'Passwords Do not match'
                );
              },
            }}
          />
          <Button
            variant="primary"
            width="full"
            onClick={handleSubmit(onSubmit)}
          >
            Update password
          </Button>
        </FormProvider>
      </div>
    </div>
  );
}
