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
  states: [
      {value: 'AN', name: 'Andaman and Nicobar Islands'},
      {value: 'AP', name: 'Andhra Pradesh'},
      {value: 'AR', name: 'Arunachal Pradesh'},
      {value: 'AS', name: 'Assam'},
      {value: 'BR', name: 'Bihar'},
      {value: 'CG', name: 'Chandigarh'},
      {value: 'CH', name: 'Chhattisgarh'},
      {value: 'DH', name: 'Dadra and Nagar Haveli'},
      {value: 'DD', name: 'Daman and Diu'},
      {value: 'DL', name: 'Delhi'},
      {value: 'GA', name: 'Goa'},
      {value: 'GJ', name: 'Gujarat'},
      {value: 'HR', name: 'Haryana'},
      {value: 'HP', name: 'Himachal Pradesh'},
      {value: 'JK', name: 'Jammu and Kashmir'},
      {value: 'JH', name: 'Jharkhand'},
      {value: 'KA', name: 'Karnataka'},
      {value: 'KL', name: 'Kerala'},
      {value: 'LD', name: 'Lakshadweep'},
      {value: 'MP', name: 'Madhya Pradesh'},
      {value: 'MH', name: 'Maharashtra'},
      {value: 'MN', name: 'Manipur'},
      {value: 'ML', name: 'Meghalaya'},
      {value: 'MZ', name: 'Mizoram'},
      {value: 'NL', name: 'Nagaland'},
      {value: 'OR', name: 'Odisha'},
      {value: 'PY', name: 'Puducherry'},
      {value: 'PB', name: 'Punjab'},
      {value: 'RJ', name: 'Rajasthan'},
      {value: 'SK', name: 'Sikkim'},
      {value: 'TN', name: 'Tamil Nadu'},
      {value: 'TS', name: 'Telangana'},
      {value: 'TR', name: 'Tripura'},
      {value: 'UK', name: 'Uttarakhand'},
      {value: 'UP', name: 'Uttar Pradesh'},
      {value: 'WB', name: 'West Bengal'}]
};
