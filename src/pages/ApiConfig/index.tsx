import Keys from './Keys';
import ApiInstructions from './ApiInstructions';
import PageContainer from '../../components/PageContainer';

export default function ApiConfig() {
  return (
    <PageContainer title="Api Config">
      <Keys />
      <ApiInstructions />
    </PageContainer>
  );
}
