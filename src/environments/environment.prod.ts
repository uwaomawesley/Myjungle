const url1:string = "https://myjungle.ec/wp-json/wc/v3"
const authUrl1:string = "https://myjungle.ec/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1:string = "https://myjungle.ec/wp-json/jwt-auth/v1/token/validate"

export const environment = {
  production: true,
  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readOnly: {
    consumer_key: 'ck_cbb37e6d47e894cfd60482aa1186d774bf3d8eb1',
    consumer_secret: 'cs_2bfd32b9e6e29df8f93cefafb433e3649442c9a9'
  },
  writableKeys: {
    consumer_key: 'ck_7cea341e8ac84ccba12d514998a93d48729bfde0',
    consumer_secret: 'cs_b408af99432fd756d864f8fa16cb9e2abd3231ab'
  },
}
