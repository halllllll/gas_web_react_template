/**
 * type
 */
export type FormData = {
  name: string;
  email: string;
};

declare global {
  function getData(): GoogleAppsScript.Content.TextOutput;
  function getData2(): JSON;
  function echo(msg: string): string;

  function echo2(arg: IEcho2): JSON;

  function doGet(): GoogleAppsScript.HTML.HtmlOutput;
  function setData(data: FormData): JSON;

  interface IEcho2 {
    email: string;
    name: string;
  }
}
export default global;
