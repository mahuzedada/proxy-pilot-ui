import useTheme from '../../hooks/useTheme';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../utility/Fields/InputField';
import Button from '../utility/Button';
import useAuth from '../../hooks/useAuth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import validateEmail from '../../utility/validateEmail';

export default function Login() {
  useTheme();
  const navigate = useNavigate();
  const { login, session, authErrorMessage } = useAuth();
  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = (data: { email: string; password: string }) => {
    login(data);
  };

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-sm w-full bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h2 className="text-2xl text-center text-gray-700 dark:text-gray-300">
          Sign in to ProxyPilot
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
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
              hideLabel
              rules={{ required: true, validate: validateEmail }}
            />
            <div className="text-right">
              <div
                className="text-xs text-gray-700 dark:text-gray-300 cursor-pointer underline mb-2"
                onClick={() => navigate('/reset-password')}
              >
                Forgot Password?
              </div>
              <InputField
                type="password"
                size="md"
                name="password"
                hideLabel
                rules={{ required: true }}
              />
            </div>
            <Button
              variant="primary"
              width="full"
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </Button>
            <div className="text-gray-700 dark:text-gray-400 text-center">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gray-900 dark:text-gray-200">
                Sign Up Now
              </Link>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
