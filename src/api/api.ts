import axios from "axios";


const ACCESS_TOKEN_OLD = 'v3.r.137440105.cfa6d9a0611280f33c689bbb574efb3279a5117e.7cf2fd32207e0b95a427a5aabc4c517ffaf8e033'
const ACCESS_TOKEN = 'v3.r.137440105.1cf0bfe81117ede77c8e782d92ab23923aaaae46.85ae533d59ce156af7473a7d6e46456059f5622b'

const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp'
const API_KEY = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
const AUTH_LOGIN = 'sergei.stralenia@gmail.com'
const AUTH_PWD = 'paralect123'
const CLIENT_ID = '2356'
export const DEFAULT_PAGE_NUMBER = 0
export const DEFAULT_ITEM_PER_PAGE = 4
const CLIENT_HR = 0;

const axiosInstance = axios.create({
    baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'x-secret-key': SECRET_KEY,
        'X-Api-App-Id': API_KEY
    }
})

export const jobAPI = {
    getVacancies: (page: number = DEFAULT_PAGE_NUMBER, count: number = DEFAULT_ITEM_PER_PAGE,): Promise<VacancyResponseType[]> =>
        axiosInstance.get<GetVacanciesResponseType>(`vacancies/?count=${count}&page=${page}`)
            .then(response => response.data)
            .then(response => response.objects),
    getAuthToken: (): Promise<string> => axiosInstance
        .get<AuthTokenResponseType>(`oauth2/password/?login=${AUTH_LOGIN}&password=${AUTH_PWD}&client_id${CLIENT_ID}=&client_secret=${API_KEY}&hr=${CLIENT_HR}`)
        .then(response => response.data.access_token),

    getVacanciesById: (ids: number[], page: number = DEFAULT_PAGE_NUMBER, count: number = DEFAULT_ITEM_PER_PAGE,): Promise<VacancyResponseType[]> => {
        const idsQuery = ids.join('&ids[]=')
        return ids.length ? axiosInstance.get<GetVacanciesResponseType>(`vacancies/?ids[]=${idsQuery}&page=${page}&count=${count}`)
            .then(response => response.data.objects) : Promise.resolve([])
    },
    getVacanciesByQueryString: (query: string):  Promise<ResponseType> =>
        axiosInstance.get<GetVacanciesResponseType>(`vacancies/${query}`)
        .then(response => response.data),

    getCatalogues: (): Promise<CataloguesType[]> => axiosInstance.get('catalogues/').then(response => response.data),
}

type ResponseType = {
    objects: VacancyResponseType[]
    total: number
    more: boolean
    subscription_id: number
    subscription_active: boolean
}
type AuthTokenResponseType = {
    access_token: string
    refresh_token: string
    ttl: number
    expires_in: number,
    token_type: string,
    reg_user_resumes_count: number
}
type GetVacanciesResponseType = {
    more: boolean
    objects: any
    subscription_active: boolean
    subscription_id: number
    total: number
}
export type VacancyResponseType = {
    canEdit: boolean
    is_closed: boolean
    id: number
    id_client: number
    payment_from: number
    payment_to: number
    date_pub_to: number
    date_archived: number
    date_published: number
    address: null | string
    profession: string
    work: string | null
    compensation: string | null
    candidat: string | null
    metro: string[]
    currency: string
    vacancyRichText: string
    covid_vaccination_requirement: any
    external_url: null | string
    contact: string | null
    moveable: boolean
    agreement: boolean
    anonymous: boolean
    is_archive: boolean
    is_storage: boolean
    type_of_work: {
        id: number,
        title: string
    },
    place_of_work: {
        id: number,
        title: string
    }
    education: {
        id: number,
        title: string
    }
    experience: {
        id: number,
        title: string
    }
    maritalstatus: {
        id: number,
        title: string
    }
    children: {
        id: number,
        title: string
    }
    client: any,
    languages: string[],
    driving_licence: string[],
    catalogues: any[],
    agency: {
        id: number,
        title: string
    },
    town: {
        id: number,
        title: string,
        declension: string
        hasMetro: boolean
        genitive: string
    },
    already_sent_on_vacancy: boolean,
    rejected: boolean,
    response_info: any[],
    phone: string,
    phones: any[],
    fax: null | string,
    faxes: null | string,
    favorite: boolean,
    client_logo: string
    highlight: boolean,
    age_from: number,
    age_to: number,
    gender: {
        id: number,
        title: string
    },
    firm_name: string
    firm_activity: string
    link: string
    isBlacklisted: boolean,
    latitude: null | string,
    longitude: null | string

}
type CatalogPositionsType =  {
    title_rus: string
    url_rus: string
    title:string
    id_parent:number
    key: number
}
export type CataloguesType =  {
    title_rus: string
    url_rus:string
    title: string
    title_trimmed: string
    key: number
    positions:CatalogPositionsType[]
}