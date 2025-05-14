export const isProd = process.env.NODE_ENV === "production";
// export const BASE_URL = "http://dms.test/api";
export const BASE_URL = "http://localhost:3000/service/api";
// export const BASE_URL = "http://localhost:3000/service/api";
export const PROXY_CONFIG = isProd ? {} : {
    '/service/':{
        target: "http://dms.test", changeOrigin:true, pathRewrite: {
            '^/service/': ''
        }
    }
};
export const CLIENT_ID = 5
export const CLIENT_SECRET = "cumm4d2Y7AfzB97rDz0kE1pNoJ98P0q4zh1IoNxN"
