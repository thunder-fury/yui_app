import { usersDatabaseId, dataBaseUrl, headers, accessToken } from "@/lib/variables";
import useSWR from "swr"
const List = () => {
  const options = {
    method: 'POST',
    headers,
  }
  // const fetcher = async (url: string) => fetch(url).then(res =>  res.json())
  // const { data } = useSWR('/api/list',fetcher)
  // console.log(data)
  const handler = async () => {
    try {
      const getData = await fetch(`/api/list`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const data = await getData.json()
      if (data.status === 200) {
        console.log(data)
      }
      // router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return <><button onClick={handler}>handler</button></>
}
export default List
