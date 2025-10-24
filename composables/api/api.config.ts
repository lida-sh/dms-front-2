export const isProd = process.env.NODE_ENV === "production";
// export const BASE_URL = "http://dms.test/api";
export const BASE_URL = "http://localhost:3000/service/api";
// export const BASE_URL = "http://localhost:3000/service/api";
export const PROXY_CONFIG = isProd ? {} : {
    '/service/':{
        target: "http://dms-back.test", changeOrigin:true, pathRewrite: {
            '^/service/': ''
        }
    }
};
<<<<<<< HEAD
export const CLIENT_ID = 2
export const CLIENT_SECRET = "RXNc7f8i9y7NFs84gYjQggexBTtWV8ts08QzmbJC"
=======
export const CLIENT_ID = 4
export const CLIENT_SECRET = "7BXRL0jwuOFEmnUmTejPhIaRWqGSKEGkFSUFW5Di"
>>>>>>> 4cde24629e69a0391c0fb94878bbefbcc8bec7d8
