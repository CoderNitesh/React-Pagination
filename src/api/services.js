import {publicRequest} from './index'

export const fetchDataService = async(pageNumber) => {
    return await publicRequest(`?_page=${pageNumber}`)
}