import { client } from "@/client"

export const fetchSanityData = async <T, U>(
    query: string,
    mapper: (item: T) => U,
    setter: React.Dispatch<React.SetStateAction<U[]>>
): Promise<void> => {
    const data = await client.fetch<T[]>(query);
    const mappedData = data.map(mapper)
    setter(mappedData);
};