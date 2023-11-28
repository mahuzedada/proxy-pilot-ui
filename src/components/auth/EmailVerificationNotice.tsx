import useTheme from '../../hooks/useTheme';
import logo from '../../assets/logo.png';

export default function EmailVerificationNotice() {
  useTheme();
  return (
    <div className="h-screen bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
      <div className=" w-full z-10 bg-slate-600 dark:bg-slate-800 p-4">
        <div className="container mx-auto">
          <div className="">
            <img className="w-24" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-semibold mb-2">Verify Your Email</h1>
        <p className="text-center text-lg mb-4">
          Thanks for signing up for ProxyPilot! We've sent a verification email
          to your email address.
        </p>
        <p className="text-center mb-6">
          Please click the link in the email to activate your account. If you
          don't see it, check your spam or junk folder.
        </p>
      </div>
    </div>
  );
}
