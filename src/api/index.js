import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.shutterstock.com/',
    credentials: true,
    headers: {
        'Authorization': 'Bearer v2/RUlxR29ZQ3EyRlRJVGVQRk9ubTlFWnNFQ1Ryb1NIOVMvMjIzMTcwNzM3L2N1c3RvbWVyLzQveW5CNURjeGdZanRlTkpGZC1Ia3pYQ29raUQ4b1VVRGR6bWN0TV9fUXRwcVFGcXV4cVZMSVJHenFGT05feDU2Q2U0M1E4c2Rlc3M0Z0RQSmd0amc3NjIzVUxONVZtcW8tVkdxa0tHVmhBdl85NXk2alhxdVZweW5QYTBDUl9LNEluSndVVmZpeGotTnMwR3diYTd6WlBKU1gtR1A0QVRseDJwOThWZTRhNjRzeC1vYXFHbzVwLUU2NVItdWJPZ05yaGdHaUVpQ0FXaDFwT1g5eGxEN0hkZy9LWHJjQ3RRLUIxbFE1R3dTdEdXcFZn'
    }
})

export default api