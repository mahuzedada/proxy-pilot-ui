import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import post from '../../lib/post';
import Button from '../../components/utility/Button';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/utility/InputField';
import Error from './Error';
import isValidDomain from './isValidDomain';
import JobStatus from './JobStatus';
import PageSectionContainer from '../../components/PageSectionContainer';

export type ApiError = {
  message: string;
  statusCode: number;
};

export default function AddDomainForm() {
  const navigate = useNavigate();
  const form = useForm();
  const { handleSubmit } = form;
  const [apiError, setApiError] = React.useState<ApiError | null>(null);
  const [jobStarted, setJobStarted] = useState(false);

  const onSubmit = async (data) => {
    setJobStarted(true);
    try {
      const res = await post('', {
        ...data,
        userId: '83396b1d-80fa-4b8d-a0a3-6292ac7683a9',
      });
      console.log({ data, res });
    } catch (e) {
      setApiError(e.response.data);
      setJobStarted(false);
    }
  };

  return (
    <>
      <PageSectionContainer>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <InputField
                name="domain"
                rules={{
                  required: true,
                  validate: isValidDomain,
                }}
              />
            </div>

            <div className="mb-6">
              <InputField
                name="targetDomain"
                rules={{
                  required: true,
                  validate: isValidDomain,
                }}
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button onClick={() => navigate(-1)} variant="danger">
                Cancel
              </Button>
              <Button variant="neutral" type="submit">
                Create SSL Certificate
              </Button>
            </div>
          </form>
        </FormProvider>
      </PageSectionContainer>

      {jobStarted && !apiError && (
        <JobStatus domain={form.getValues().domain} />
      )}
      {apiError && (
        <Error message={apiError.message} statusCode={apiError.statusCode} />
      )}
    </>
  );
}
