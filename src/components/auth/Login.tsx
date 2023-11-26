import useTheme from '../../hooks/useTheme';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../utility/Fields/InputField';
import Button from '../utility/Button';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function Login() {
  useTheme();
  const { login, user } = useAuth();
  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = (data: { email: string; password: string }) => {
    console.log({ data });
    login(data);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-sm w-full bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-4">
          Login into ProxyPilot
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-200 mb-6">
          Manage your SSL certificates and reverse proxies with ease.
        </p>
        <FormProvider {...form}>
          <InputField
            type="email"
            size="md"
            name="email"
            hideLabel
            rules={{ required: true }}
          />
          <InputField
            type="password"
            size="md"
            name="password"
            hideLabel
            rules={{ required: true }}
          />
          <Button
            variant="primary"
            width="full"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </FormProvider>
      </div>
    </div>
  );
}
