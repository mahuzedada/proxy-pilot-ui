interface QuickStatsPanelProps {
  totalDomains?: number;
  activeCertificates?: number;
  pendingRequests?: number;
}

function QuickStatsPanel({
  totalDomains = 0,
  activeCertificates = 0,
  pendingRequests = 0,
}: QuickStatsPanelProps) {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-4">
      <StatItem label="Total Domains" value={totalDomains || 0} />
      <StatItem label="Active Certificates" value={activeCertificates || 0} />
      <StatItem label="Pending Requests" value={pendingRequests || 0} />
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export default QuickStatsPanel;