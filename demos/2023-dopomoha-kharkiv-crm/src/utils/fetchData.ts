export const fetchData = async <TData = unknown>(url: string) => {
  const response = await fetch(url)
  if (!response.ok)
    throw new Error(`[fetchData] Error fetching data from url:\n${url}`)

  // TODO: Validate
  const data = (await response.json()) as TData | undefined

  if (!data)
    throw new Error(`[fetchData] No data was returned from url:\n${url}`)

  return data
}
