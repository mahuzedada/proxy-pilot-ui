import useFormState from './useFormState';
import Field from './components/Field';
import Layout from './components/Layout';
import Form from './components/Form';

type Props = {
  email: string;
  password: string;
};

export default function Account(props: Props) {
  const { values, handleChange, isEdited, reset } = useFormState(props);

  const handleAccountSettingsSubmit = (e: any) => {
    e.preventDefault();
    console.log('Account Settings:', values);
  };

  return (
    <Layout
      title="Account"
      isEdited={isEdited}
      onCancel={reset}
      onSave={handleAccountSettingsSubmit}
    >
      <Form onSubmit={handleAccountSettingsSubmit}>
        <Field
          label="Email"
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange('email')}
        />
        <Field
          label="Password"
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange('password')}
        />
      </Form>
    </Layout>
  );
}
