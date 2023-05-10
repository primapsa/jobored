import axios from "axios";

const ACCESS_TOKEN = 'v3.r.137440105.ade1a5c7318e723eb2ec1d4a49ea83e5294212f5.0303c9a4462879e6f3cede9ac751def925c7bf24'
const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp'
const API_KEY = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
const AUTH_LOGIN = 'sergei.stralenia@gmail.com'
const AUTH_PWD = 'paralect123'
const CLIENT_ID = '2356'
const DEFAULT_PAGE_NUMBER = 0
const DEFAULT_ITEM_PER_PAGE = 4
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
    getVacancies: (count: number = DEFAULT_ITEM_PER_PAGE, page: number = DEFAULT_PAGE_NUMBER): Promise<any> => axiosInstance.get<GetVacanciesResponseType>(`vacancies/?count=${count}&page=${page}`)
        .then(response => response.data)
        .then(response => response.objects),
    getAuthToken: (): Promise<string> => axiosInstance
        .get<AuthTokenResponseType>(`oauth2/password/?login=${AUTH_LOGIN}&password=${AUTH_PWD}&client_id${CLIENT_ID}=&client_secret=${API_KEY}&hr=${CLIENT_HR}`)
        .then(response => response.data)
        .then(response => response.access_token)
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