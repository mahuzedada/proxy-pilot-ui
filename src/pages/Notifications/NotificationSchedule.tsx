import ToggleField from '../../components/utility/Fields/ToggleField';
import SettingsWrapper from '../../components/SettingsWrapper';
import { useForm, FormProvider } from 'react-hook-form';

export default function NotificationSchedule() {
  const form = useForm();
  const {
    handleSubmit,
    formState: { dirtyFields },
    reset,
  } = form;

  const onSubmit = (data: any) => {
    console.log('Notification Schedule:', data);
  };

  return (
    <SettingsWrapper
      title="Schedule"
      isEdited={
        dirtyFields.oneDayBefore ||
        dirtyFields.threeDaysBefore ||
        dirtyFields.sevenDaysBefore ||
        dirtyFields.fourteenDaysBefore ||
        dirtyFields.twentyOneDaysBefore ||
        dirtyFields.thirtyDaysBefore ||
        dirtyFields.sixtyDaysBefore
      }
      onCancel={reset}
      onSave={handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <div className="flex flex-col gap-2">
          <ToggleField name="oneDayBefore" />
          <ToggleField name="threeDaysBefore" />
          <ToggleField name="sevenDaysBefore" />
          <ToggleField name="fourteenDaysBefore" />
          <ToggleField name="twentyOneDaysBefore" />
          <ToggleField name="thirtyDaysBefore" />
          <ToggleField name="sixtyDaysBefore" />
        </div>
      </FormProvider>
    </SettingsWrapper>
  );
}
