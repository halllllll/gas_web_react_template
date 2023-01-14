import React from 'react';
import { useForm } from 'react-hook-form';

type formTitleProps = {
  formTitle: string;
};

// useFormの型定義(tsなので)
// 組み込みのFormDataはuseFormでオプションつけれなかったりとちょっと手触りが悪い気がする
type FormData = {
  country: string;
  comment: string;
};

const Form2 = (props: formTitleProps): JSX.Element => {
  const { formTitle } = props;

  // useFormの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    criteriaMode: 'all',
    defaultValues: {
      country: 'COUNTRY',
      comment: 'COMMENT',
    },
  });

  const handleOnSubmit = (data: FormData) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    console.log(`data?(promise外) ${data}`);
    console.log(`これはform2です`);
    google.script.run
      .withSuccessHandler((d) => {
        console.log(d);
      })
      .withFailureHandler((err) => {
        alert(err);
      })
      .getData2();
    console.log('はい');
  };

  const handleOnError = (errors: any) => {
    console.error(`here is on handle On Error`);
    console.error(errors);
  };

  return (
    <>
      <h2>このFormは{formTitle}です</h2>

      <form
        onSubmit={handleSubmit(handleOnSubmit, handleOnError)}
        encType="multipart/form-data"
        id="form2"
      >
        <div>
          <label htmlFor="name">名前: </label>
          <input
            {...register('country', {
              required: 'input country name',
            })}
            type="text"
          />
          {errors.country && (
            <p style={{ color: 'red' }}>{errors.country.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="name">メールアドレス: </label>
          <input
            {...register('comment', {
              required: 'input comment',
              pattern: {
                value: /^[A-Z0-9._%+-]{4,}$/i,
                message: 'fdasjfopdajfaowejfoa!!!!',
              },
            })}
            type="text"
          />
          {errors.comment && (
            <p style={{ color: 'red' }}>{errors.comment.message}</p>
          )}
        </div>
        <button disabled={isSubmitting} className="btn btn-primary mr-1">
          {isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          送信2
        </button>
      </form>
    </>
  );
};

export default Form2;
