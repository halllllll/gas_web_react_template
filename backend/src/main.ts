import global, { FormData } from './global';
import customFunc from './utility';

const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getActiveSheet();

const getAllDataOfSheet = () => {
  console.log(`yes go `);
  const data = sheet.getDataRange();
  for (const row of data.getValues()) {
    console.log(row);
  }
};

globalThis.echo2 = (s1: string, s2: string): any => {
  console.log(`here is echo2!`);
  const ret = {
    message: `echo2!!`,
    name: s1,
    mail: s2,
    success: true,
    arr: ['さかな', 'チンアナゴ'],
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(JSON.stringify(ret));
};

globalThis.setData = (d: FormData): any => {
  // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
  console.log(`get!!! ${d}`);
  console.log(`結局決め打ちでしか取れないのか...? ${d.email}:${d.name}`);
  const ret = {
    name: d.name,
    mail: d.email,
    success: true,
    arr: ['さかな', 'チンアナゴ'],
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(JSON.stringify(ret));
};

globalThis.getData = () => {
  console.log('YES GET DATA');
  const ret = {
    name: 'hatsune miku',
    age: 16,
  };

  return ContentService.createTextOutput(JSON.stringify(ret)).setMimeType(
    ContentService.MimeType.JSON
  );
};

globalThis.echo = (msg: string) => {
  return `echoooo ${msg}`;
};

globalThis.getData2 = (): any => {
  console.log(`here is get Data 2`);
  const ret = {
    language: 'japanese',
    favorite: ['anime', 'biriyani', 'game'],
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(JSON.stringify(ret));
};

global.doGet = () => {
  const title = ss.getName();
  getAllDataOfSheet();
  customFunc();

  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle(`${title}`)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
};
