import { Link } from 'react-router-dom';
import Button from '../../components/utility/Button';

export default function QuickActionButtons() {
  return (
    <div className="my-4 flex justify-center space-x-4">
      <Link to="/domain/new">
        <Button variant="primary">Add New Domain</Button>
      </Link>
      <Link to="/domain/all">
        <Button variant="neutral">View All Domains</Button>
      </Link>
    </div>
  );
}
