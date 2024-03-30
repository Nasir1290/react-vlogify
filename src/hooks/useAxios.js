import { useEffect } from "react"
import { api } from "../api"
import { useAuth } from "./useAuth"
import axios from "axios";



const useAxios = () => {
    const { auth, setAuth } = useAuth();

    useEffect(() => {

        // add a request interceptor....

        const requestIntecept = api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },

            (error) => Promise.reject(error)
        )
        // end of request interceptor


        // add a response interceptor....
        const responseIntercept = api.interceptors.response.use(

            // if response is ok , then nothing to do , just return the response .
            (response) => response,

            // if error occured then take a refresh toke from refresh token api and make a request call again with new token.
            async (error) => {
                // take the original request from error.config
                const originalRequest = error.config;

                // check if the error response is unauthorized(401) and retry request set to false?
                if (error.response.status === 401 && !originalRequest?._retry) {
                    // set retry to true
                    originalRequest._retry = true;

                    try {
                        const refreshToken = auth?.refreshToken;

                        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`, { refreshToken });

                        const { token } = response.data;

                        console.log(`new Toke is ${token}`);

                        setAuth({
                            ...auth,
                            authToken: token
                        })

                        originalRequest.Authorization = `Bearer ${token}`;

                    } catch (error) {
                        ""
                    }
                }
            }

        )

    }, [auth?.authToken]);

}