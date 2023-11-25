import Keys from './Keys';
import ApiInstructions from './ApiInstructions';

export default function ApiConfig() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Api Config</h2>
      <Keys />
      <ApiInstructions />
    </div>
  );
}
