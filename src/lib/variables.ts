const notionUsersBaseToken = process.env.NOTION_USERSBASE_TOKEN
const usersDatabaseId = process.env.NOTION_USERS_DATABASE_ID
//
const medicalViitHistoryToken = process.env.NOTION_MEDICAL_VISIT_HISTORY_TOKEN
const medicalViitHistoryId = process.env.NOTION_MEDICAL_VISIT_HISTORY_ID
const accessToken = process.env.ACCESS_TOKEN_SECRET
const headers = (notionToken?: string) => {
  return {
    Accept: 'application/json',
    'Notion-Version': '2021-05-13',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${notionToken}`,
  }
}
const dataBaseUrl = `https://api.notion.com/v1`

export {
  usersDatabaseId,
  notionUsersBaseToken,
  medicalViitHistoryToken,
  medicalViitHistoryId,
  headers,
  dataBaseUrl,
  accessToken
}
