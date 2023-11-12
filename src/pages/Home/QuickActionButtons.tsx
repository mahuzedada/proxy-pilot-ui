import { Link } from 'react-router-dom';

function QuickActionButtons() {
  return (
    <div className="my-4 flex justify-center space-x-4">
      <Link to="/domain/new">
        <ActionButton label="Add New Domain" />
      </Link>
      <Link to="/domain/all">
        <ActionButton label="View All Domains" />
      </Link>
    </div>
  );
}

interface ActionButtonProps {
  label: string;
}

function ActionButton({ label }: ActionButtonProps) {
  return (
    <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  );
}

export default QuickActionButtons;
