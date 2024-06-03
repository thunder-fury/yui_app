type DataFormattingType = {
  text: { content: string; link: null | { url: string } }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: null | string
}
type TextTypeArr = DataFormattingType[] | any
export const notionDataFormatting = (data: TextTypeArr, key: string) => {
  if (!data) return null
  const richText = data.results.map((item: any) => item.properties[key])
  return richText[0].rich_text[0].plain_text

  // return text.map(
  //   (value: {
  //     text: { content: string; link: null | { url: string } }
  //     plain_text: string
  //     href: null | string
  //   }) => {
  //     const {
  //       text,
  //     } = value
  //     return text.content
  //   }
  // )
}
