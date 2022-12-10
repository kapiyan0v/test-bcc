import {BreedData} from "../models/breedData";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {BreedResponse} from "../models/breedResponse";



export const useBreeds = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<BreedData | null>(null)
    const [error, setError] = useState('')
    const url: string = 'https://dog.ceo/api/breeds/list/all'


    async function getBreeds() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<BreedResponse>(url).then((res) => {
                return res.data
            })
            setData(response.message)
            setLoading(false)

        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }



    useEffect(() => {
        getBreeds()
    }, [setData])


    return {data, error, loading}
}
