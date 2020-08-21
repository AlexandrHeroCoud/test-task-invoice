export const localStorageAPI = {

    /**
     * @function setUser()
     * @param {Object} data
     * **/
    setUser: (data) =>{
        const login = data.login
        const avatarUrl = data.avatar_url
        const isAuth = data.isAuth
        localStorage.setItem('login', login);
        localStorage.setItem('avatar_url', avatarUrl);
        localStorage.setItem('isAuth', isAuth);
    },

    /**
     * @function getIsAuth()
     * @return Object
     * **/
    getUser: () =>{
        return {
            login:localStorage.getItem('login'),
            avatar: localStorage.getItem('avatar_url'),
            isAuth: localStorage.getItem('isAuth')
        }
    },
    /**
     * @function clearUser()
     * @description clear localStorage of user data
     * **/
    clearUser: () =>{
        localStorage.removeItem('login');
        localStorage.removeItem('avatar_url');
        localStorage.removeItem('isAuth');
    }

}