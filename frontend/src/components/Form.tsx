import React from 'react'
import { useForm } from 'react-hook-form'

type formTitleProps = {
  formTitle: string
}

// useFormの型定義(tsなので)
// 組み込みのFormDataはuseFormでオプションつけれなかったりとちょっと手触りが悪い気がする
type FormData = {
  name: string
  email: string
}

const Form = (props: formTitleProps) => {
  const { formTitle } = props

  // useFormの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    criteriaMode: 'all',
    defaultValues: {
      name: 'どうして...',
      email: 'kusottare@fuck.shit'
    }
  })

  // const runGoogleScript = new Promise((resolve, reject) => {
  //   google.script.run
  //     .withSuccessHandler(data=>{
  //       console.log(`yes success`);
  //       resolve(data);
  //     })
  //     .withFailureHandler(err =>{
  //       console.error(`omg error`)
  //       reject(err)
  //     }).echo("なぜ");
  // });

  const handleOnSubmit = (data: FormData) => {
    console.log(`here is handle On Submit!!!!!!!`)
    console.log(`data?(promise外) ${data}`)
    console.log('あとでpromise化する')
    // いや呼んでないけどなんでis not a functionって言われなきゃいけねぇんだよ
    google.script.run
      .withSuccessHandler((d) => {
        console.log(`yes getData`)
        console.log(d)
      })
      .withFailureHandler((err) => {
        alert(err)
      })
      .echo("yokoyama") // こんなもんねぇけどな
    console.log('はい')

    // return new Promise((resolve, reject) => {
    //   google.script.run
    //     .withSuccessHandler((v) => {
    //       console.log(`v! ${v}`)
    //       resolve(v)
    //     })
    //     .withFailureHandler((e) => {
    //       console.error(`error::::: ${e}`)
    //       reject(e)
    //     })
    //     .setData(data)
    // })
  }

  const handleOnError = (errors) => {
    console.error(`here is on handle On Error`)
    console.error(errors)
  }

  return (
    <>
      <h2>このFormは{formTitle}です</h2>

      <form
        // onSubmit={(e) => {
        //   e.preventDefault()
        //   console.log(`おっ♡ ${new Date()} preventDefaultしたよ`)
        //   handleSubmit(handleOnSubmit, handleOnError)

        //   console.log(`あれ...?`)
        // }}
        onSubmit={handleSubmit(handleOnSubmit, handleOnError)}
        // encType="multipart/form-data"
        // id="form"
      >
        <div>
          <label htmlFor="name">名前: </label>
          <input
            {...register('name', {
              required: '名前を入力してください'
            })}
            type="text"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="name">メールアドレス: </label>
          <input
            {...register('email', {
              required: 'メールアドレスを入力してください',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '正しいメールアドレスの形式で入力してください。'
              }
            })}
            type="text"
          />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>
        <button disabled={isSubmitting} className="btn btn-primary mr-1">
          {isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          送信
        </button>
      </form>
    </>
  )
}

export default Form
