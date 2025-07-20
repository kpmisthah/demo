import axios from "axios"
 
const api = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_URL}`,
    withCredentials:true
})
// api.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await api.post('/refresh');
//         return api(originalRequest);
//       } catch (refreshError) {
//         const publicRoutes = ['/', '/login', '/signup'];
//         if (!publicRoutes.includes(window.location.pathname)) {
//           window.location.href = '/login';
//         }

//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
export default api