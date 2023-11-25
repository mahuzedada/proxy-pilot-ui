import SettingsWrapper from '../../components/SettingsWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../../components/utility/Fields/InputField';

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
    <SettingsWrapper
      title="Profile"
      isEdited={dirtyFields.firstName || dirtyFields.lastName}
      onCancel={reset}
      onSave={handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <InputField name="firstName" rules={{ required: true }} />
        <InputField name="lastName" rules={{ required: true }} />
      </FormProvider>
    </SettingsWrapper>
  );
}
