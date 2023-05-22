import axios from "axios";
import {AUTH} from "../const/auth";
import {PAGE} from "../const/page";

const axiosInstance = axios.create({
    baseURL: AUTH.BASE_URL,
    headers: {
        'Authorization': `Bearer ${AUTH.TOKEN}`,
        'x-secret-key': AUTH.SECRET_KEY,
        'X-Api-App-Id': AUTH.API_KEY
    }
})

export const jobAPI = {
    getVacancies: (page: number = PAGE.NUMBER, count: number = PAGE.ITEM,): Promise<VacancyResponseType[]> =>
        axiosInstance.get<GetVacanciesResponseType>(`vacancies/?count=${count}&page=${page}`)
            .then(response => response.data)
            .then(response => response.objects),

    getAuthToken: (): Promise<string> => axiosInstance
        .get<AuthTokenResponseType>
        (`oauth2/password/?login=${AUTH.LOGIN}&password=${AUTH.PWD}&client_id${AUTH.ID}=&client_secret=${AUTH.API_KEY}&hr=${AUTH.HR}`)
        .then(response => response.data.access_token),

    getVacanciesById: (ids: number[], page: number = PAGE.NUMBER, count: number = PAGE.ITEM,): Promise<VacancyResponseType[]> => {
        const idsQuery = ids.join('&ids[]=')
        return ids.length ? axiosInstance.get<GetVacanciesResponseType>(`vacancies/?ids[]=${idsQuery}&page=${page}&count=${count}`)
            .then(response => response.data.objects) : Promise.resolve([])
    },
    getVacanciesByQueryString: (query: string): Promise<ResponseType> =>
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
type CatalogPositionsType = {
    title_rus: string
    url_rus: string
    title: string
    id_parent: number
    key: number
}
export type CataloguesType = {
    title_rus: string
    url_rus: string
    title: string
    title_trimmed: string
    key: number
    positions: CatalogPositionsType[]
}