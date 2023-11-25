import ToggleField from '../../components/utility/Fields/ToggleField';
import SettingsWrapper from '../../components/SettingsWrapper';
import { useForm, FormProvider } from 'react-hook-form';

export default function NotificationTypes() {
  const form = useForm();
  const {
    handleSubmit,
    formState: { dirtyFields },
    reset,
  } = form;

  const onSubmit = (data: any) => {
    console.log('Notification Types:', data);
  };

  return (
    <SettingsWrapper
      title="Notification Types"
      isEdited={dirtyFields.expiry || dirtyFields.change}
      onCancel={reset}
      onSave={handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <div className="flex flex-col gap-2">
          <ToggleField name="expiry" label="Expiry Alerts" />
          <ToggleField name="change" label="Change Alerts" />
        </div>
      </FormProvider>
    </SettingsWrapper>
  );
}
