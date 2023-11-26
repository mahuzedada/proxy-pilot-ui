import useTheme from '../../hooks/useTheme';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../utility/Fields/InputField';
import Button from '../utility/Button';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import PasswordResetEmailConfirmation from './PasswordResetEmailConfirmation';

export default function ResetPassword() {
  const [emailSent, setEmailSent] = useState(false);
  useTheme();
  const { resetPasswordForEmail } = useAuth();
  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = async (data: { email: string }) => {
    await resetPasswordForEmail(data.email);
    setEmailSent(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-sm w-full bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-4">
          Reset your password
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-200 mb-6">
          Enter your email to reset your password.
        </p>

        {emailSent && (
          <PasswordResetEmailConfirmation email={form.getValues().email} />
        )}

        <FormProvider {...form}>
          <InputField
            type="email"
            size="md"
            name="email"
            hideLabel
            rules={{ required: true }}
          />
          <Button
            variant="primary"
            width="full"
            onClick={handleSubmit(onSubmit)}
          >
            Send verification email
          </Button>
        </FormProvider>
      </div>
    </div>
  );
}
