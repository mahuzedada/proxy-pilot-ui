import Layout from './components/Layout';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../../components/utility/InputField';

type Props = {
  email: string;
  password: string;
};

export default function Account(props: Props) {
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
      title="Account"
      isEdited={dirtyFields.email || dirtyFields.password}
      onCancel={reset}
      onSave={handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <InputField name="email" options={{ required: true }} />
        <InputField name="password" options={{ required: true }} />
      </FormProvider>
    </Layout>
  );
}
