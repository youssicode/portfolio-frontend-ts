import { client } from "@/helpers/client"
import { CertificationType } from "@/sections/Skills/CertificationsSection"
import { SkillType } from "@/sections/Skills/SkillsSection"

export const fetchSanityData = async <T, U>(
  query: string,
  mapper: (item: T) => U,
  setter: React.Dispatch<React.SetStateAction<U[]>>
): Promise<U[]> => {
  const data = await client.fetch<T[]>(query)
  const mappedData = data.map(mapper)
  setter(mappedData)
  return mappedData
}

export const sortState = (data: SkillType[] | CertificationType[]) =>
  data.sort((a, b) => parseInt(a.index) - parseInt(b.index))
