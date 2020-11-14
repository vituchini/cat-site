import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "6fdc5189-693b-4a05-abe8-85419120110e"
        }
    },
);


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 2) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const authAPI = {
    setUserData() {
        return instance.get('auth/me').then(res => {
            return res.data
        })
    }
}
export const profileAPI = {
    setUserProfile(userId) {
        return instance.get('profile/' + userId)
    }
}