import customFunc from './utility'
import global from './globalThis'

const getAllDataOfSheet = () => {
  console.log(`yes go `)
  const sheet = SpreadsheetApp.getActiveSheet()
  const data = sheet.getDataRange()
  for (const row of data.getValues()) {
    console.log(row)
  }
}

global.doGet = () => {
  getAllDataOfSheet()
  customFunc()
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('react web app on gas')
    .addMetaTag('charset', 'UTF-8')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}
