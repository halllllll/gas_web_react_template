import React from 'react';
import ReactDOM from 'react-dom/client';
import { Message, Form, FormTest, Form2 } from './components/Index';

const rootElemnt = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(rootElemnt);

/** 各エリア */
// const [lastName, setFirstName] = useState("苗字");
// const [firstName, setLastName] = useState("名前")
// const handleChangeName = (newLastName: string, newFirstName: string) => {
//   setLastName(newLastName);
//   setFirstName(newFirstName);
// }
root.render(
  <React.StrictMode>
    <Message name="Here_is_direct_under_root" />
    {/* <TitleArea />
    <InputArea handleChangeName={handleChangeName}/>
    <ContentArea lastName={lastName} firstName={firstName}/> */}
    <Form formTitle="REACT HOOK FORM TEST" />
    <hr />
    <FormTest />
    <hr />
    <Form2 formTitle="form2♡" />
  </React.StrictMode>
);
