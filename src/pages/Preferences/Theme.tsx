import SettingsWrapper from '../../components/SettingsWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import SelectField from '../../components/utility/Fields/SelectField';
import useTheme from '../../hooks/useTheme';

const options = {
  System: 'default',
  Dark: 'dark',
  Light: 'light',
};

export default function Theme() {
  const [theme, setTheme] = useTheme();
  const form = useForm({
    defaultValues: {
      theme: Object.keys(options).find((item) => options[item] === theme),
    },
  });
  const {
    handleSubmit,
    formState: { dirtyFields },
    reset,
  } = form;

  const onSubmit = (data: any) => {
    setTheme(options[data.theme]);
    reset(data);
  };

  return (
    <SettingsWrapper
      title="Appearance"
      isEdited={dirtyFields.theme}
      onCancel={reset}
      onSave={handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <SelectField name="theme" options={Object.keys(options)} />
      </FormProvider>
    </SettingsWrapper>
  );
}
