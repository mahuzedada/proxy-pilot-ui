import useTheme from '../../hooks/useTheme';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../utility/Fields/InputField';
import Button from '../utility/Button';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import validateEmail from '../../utility/validateEmail';

export default function Signup() {
  useTheme();
  const { signup, authErrorMessage } = useAuth();
  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = (data: { email: string; password: string }) => {
    signup(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-sm w-full bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h2 className="text-2xl text-center text-gray-700 dark:text-gray-300">
          Get started with ProxyPilot
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Create a new account.
        </p>
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mb-6">
          Manage your SSL certificates and reverse proxies with ease.
        </p>
        {authErrorMessage && (
          <div className="text-red-500">{authErrorMessage}</div>
        )}
        <FormProvider {...form}>
          <div className="flex flex-col gap-4">
            <InputField
              type="email"
              size="md"
              name="email"
              placeholder="you@example.com"
              hideLabel
              rules={{ required: true, validate: validateEmail }}
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
              Sign Up
            </Button>
            <div className="text-gray-500 dark:text-gray-400 text-center">
              Have an account?{' '}
              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-200 underline"
              >
                Sign In Now
              </Link>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
