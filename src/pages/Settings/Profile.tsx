import useFormState from './useFormState';
import Field from './components/Field';
import Layout from './components/Layout';
import Form from './components/Form';

type Props = {
  firstName: string;
  lastName: string;
};

export default function Profile(props: Props) {
  const { values, handleChange, isEdited, reset } = useFormState(props);

  const handleAccountSettingsSubmit = (e: any) => {
    e.preventDefault();
    console.log('Account Settings:', values);
  };

  return (
    <Layout
      title="Profile"
      isEdited={isEdited}
      onCancel={reset}
      onSave={handleAccountSettingsSubmit}
    >
      <Form onSubmit={handleAccountSettingsSubmit}>
        <Field
          label="First Name"
          type="text"
          id="firstName"
          value={values.firstName}
          onChange={handleChange('firstName')}
        />
        <Field
          label="Last Name"
          type="text"
          id="lastName"
          value={values.lastName}
          onChange={handleChange('lastName')}
        />
      </Form>
    </Layout>
  );
}
