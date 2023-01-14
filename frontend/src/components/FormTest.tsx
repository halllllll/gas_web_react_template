import React from 'react';
import { useForm } from 'react-hook-form';

const FormTest = (): JSX.Element => {
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  async function onSubmit(data: unknown) {
    // return promise that resolves after 2 seconds
    return await new Promise((resolve) => {
      setTimeout(() => {
        console.log(`data!!!!`);
        console.log(data);
        resolve(data);
      }, 2000);
    });
  }

  return (
    <div className="card m-3">
      <h5 className="card-header">
        React Hook Form - Submitting Spinner Example
      </h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">名前: </label>
            <input
              {...register('name', {
                required: '名前を入力してください',
              })}
              type="text"
            />
          </div>

          <button disabled={isSubmitting} className="btn btn-primary mr-1">
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormTest;
