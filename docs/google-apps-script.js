/* eslint-disable no-unused-vars -- doPost is invoked by Google Apps Script */
/**
 * Exemplo para Google Apps Script. Ajuste SPREADSHEET_ID e SHEET_NAME,
 * publique como Web App e autorize a execução na conta proprietária.
 */
const SPREADSHEET_ID = 'INSIRA_O_ID_DA_PLANILHA'
const SHEET_NAME = 'RSVP'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    if (!data.nomeCompleto || !data.telefone || !data.confirmacao) {
      return jsonResponse({ success: false, message: 'Campos obrigatórios em falta.' })
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
    if (!sheet) throw new Error('Folha RSVP não encontrada.')

    sheet.appendRow([
      data.dataSubmissao || new Date().toISOString(),
      data.nomeCompleto,
      data.telefone,
      data.confirmacao,
      Number(data.numeroAcompanhantes) || 0,
      Array.isArray(data.nomesAcompanhantes) ? data.nomesAcompanhantes.join(', ') : '',
      data.mensagem || '',
    ])
    return jsonResponse({ success: true })
  } catch (error) {
    return jsonResponse({ success: false, message: error.message })
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON)
}

