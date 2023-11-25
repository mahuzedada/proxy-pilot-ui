import { useState } from 'react';
import PageSectionContainer from '../../components/PageSectionContainer';

type Plan = 'free' | 'pro' | 'enterprise';

interface PlanDetails {
  title: string;
  price?: string;
  features: string[];
}

const planInfo: Record<Plan, PlanDetails> = {
  free: {
    title: 'Free',
    features: ['Manage up to 5 domains'],
  },
  pro: {
    title: 'Pro',
    price: '$60 per month',
    features: ['Manage up to 100 domains', 'Slack integration', 'Webhooks'],
  },
  enterprise: {
    title: 'Enterprise',
    price: '$110 per month',
    features: [
      'Manage up to 500 domains',
      'Slack integration',
      'Microsoft Teams integration',
      'Webhooks',
    ],
  },
};

export default function PlansAndPricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('free');

  return (
    <PageSectionContainer>
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">
        Plans and Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(planInfo).map(([key, details]) => (
          <div
            key={key}
            className={`p-4 border rounded-lg ${
              selectedPlan === key ? 'border-blue-500' : 'border-gray-300'
            } dark:border-gray-700`}
          >
            <h3 className="text-lg font-bold mb-2 dark:text-white">
              {details.title}
            </h3>
            {details.price && (
              <p className="text-md text-gray-800 dark:text-gray-300">
                {details.price}
              </p>
            )}
            <ul className="list-disc list-inside mb-4">
              {details.features.map((feature, index) => (
                <li key={index} className="text-gray-800 dark:text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
            {selectedPlan !== key && (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setSelectedPlan(key as Plan)}
              >
                Choose {details.title}
              </button>
            )}
          </div>
        ))}
      </div>
    </PageSectionContainer>
  );
}
