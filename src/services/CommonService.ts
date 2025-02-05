import ApiService from './ApiService'

export async function apiGetNotificationCount() {
    return ApiService.fetchDataWithAxios<{
        count: number
    }>({
        url: '/notifications/count',
        method: 'get',
    })
}

export async function apiGetNotificationList() {
    return ApiService.fetchDataWithAxios<
        {
            id: string
            target: string
            description: string
            date: string
            image: string
            type: number
            location: string
            locationLabel: string
            status: string
            readed: boolean
        }[]
    >({
        url: '/notifications',
        method: 'get',
    })
}

export async function apiGetSearchResult<T>(params: { query: string }) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/search',
        method: 'get',
        params,
    })
}
