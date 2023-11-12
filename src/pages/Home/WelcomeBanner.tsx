export default function WelcomeBanner() {
  const userName = 'Chatis';

  return (
    <div className="bg-slate-200 text-slate-900 p-4 rounded-md shadow-md">
      <h1 className="text-xl font-semibold">Welcome, {userName}!</h1>
    </div>
  );
}
