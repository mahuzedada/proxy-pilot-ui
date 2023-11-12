interface Activity {
  id: string;
  domainName: string;
  status: string;
  date: string;
}

interface RecentActivitySectionProps {
  activities: Activity[];
}

function RecentActivitySection({ activities }: RecentActivitySectionProps) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
      {activities.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </ul>
      ) : (
        <p>No recent activities.</p>
      )}
    </div>
  );
}

function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-900">
          {activity.domainName}
        </p>
        <p className="text-sm text-gray-500">{activity.status}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">{activity.date}</p>
      </div>
    </li>
  );
}

export default RecentActivitySection;