import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email,password,username,role,image)=>{
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}

const getAllUsers = ()=>{
    return axios.get('api/v1/participant/all')

}

const putUpdateNewUser = (id,username,role,image)=>{
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data)
}

const deleteUser = (id)=>{

    return axios.delete('api/v1/participant', {data:{id:id}})
}

const getUserWithPaginate = (page,limit)=>{

    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email,password,delay)=>{
    return axios.post(`api/v1/login`,{email,password,delay:0})
}

const postRegister = (email,username,password)=>{
    return axios.post("api/v1/register",{email,username,password})
}

export {
    postCreateNewUser,
    getAllUsers,
    putUpdateNewUser,
    deleteUser,
    getUserWithPaginate,
    postLogin,
    postRegister
}