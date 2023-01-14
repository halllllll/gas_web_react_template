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
  function echo2(s1: string, s2: string): JSON;
  function doGet(): GoogleAppsScript.HTML.HtmlOutput;
  function setData(data: FormData): JSON;
}
export default global;
