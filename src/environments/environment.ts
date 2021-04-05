// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const url1:string = "https://myjungle.ec/wp-json/wc/v3"
const authUrl1:string = "https://myjungle.ec/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1:string = "https://myjungle.ec/wp-json/jwt-auth/v1/token/validate"


// noinspection DuplicatedCode
export const environment = {
    production: false,
    backend_api_url: url1,
    auth_url: authUrl1,
    token_verify_url: tokenVerifyUrl1,
    readOnlyKeys: {
      consumer_key: 'ck_ceb9764a10f7ef33dc755a7d9abcccc60212f9dc',
      consumer_secret: 'cs_3eb9aeaad501b507b8bf87b46a24951a1d051ad8'
    },
    writableKeys: {
      consumer_key: 'ck_ceb9764a10f7ef33dc755a7d9abcccc60212f9dc',
      consumer_secret: 'cs_3eb9aeaad501b507b8bf87b46a24951a1d051ad8'
    },
  }
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
