import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password) => {
    const {data} = await $host.post('api/user/registration', {name, email, password, role:'USER'})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const fetchUser = async ()=>{
    return jwt_decode(localStorage.getItem('token'))
}

export const updateUser = async (id,status,role)=>{
    const {data} = await $authHost.put('api/user/',{id,status,role})
    return data
}

export const fetchUsers = async ()=>{
    const {data} = await $host.get('api/user')
    console.log(data)
    return data
}

export  const deleteUser = async (id) => {
    const {data} = await $authHost.delete('api/user/', id)
    return data
}

export const login = async (email,password) => {
    const {data} = await $host.post('api/user/login', {email,password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
