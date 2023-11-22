import Layout from './components/Layout';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../../components/utility/InputField';

type Props = {
  firstName: string;
  lastName: string;
};

export default function Profile(props: Props) {
  const defaultValues = props;

  const form = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { dirtyFields },
    reset,
  } = form;

  const onSubmit = (data: any) => {
    console.log('Account Settings:', data);
  };

  return (
    <Layout
      title="Profile"
      isEdited={dirtyFields.firstName || dirtyFields.lastName}
      onCancel={reset}
      onSave={handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <InputField name="firstName" options={{ required: true }} />
        <InputField name="lastName" options={{ required: true }} />
      </FormProvider>
    </Layout>
  );
}
