import {$authHost, $host} from "./index";

export const createCollection = async (collection) => {
    const {data} = await $authHost.post('api/collection', collection)
    return data
}

export const fetchCollections = async () => {
    const {data} = await $host.get('api/collection')
    return data
}

export const fetchOneCollection = async (id) => {
    const {data} = await $host.get('api/collection/' + id)
    return data
}