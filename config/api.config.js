/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  clientId: '9da5ccdc-ebeb-44c8-89a1-7c1053e107f3',
  obfuscatedClientSecret: 'U2FsdGVkX19oLMyqzv+1gyL9IhIm6WT8dfYDg7ybFoETeqS0eYvZV8xUjhCJUCg7vt2d3hWrV7BVteL4vfvMbA==',

  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: 'https://login.chinacloudapi.cn/common/oauth2/v2.0/token',
  driveApi: 'https://microsoftgraph.chinacloudapi.cn/v1.0/sites/experience.sharepoint.cn,8755fcf6-cc06-4118-b600-9a72098015b0,13e49855-880d-4733-965a-4a6180d12f79/drive',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // The directLinkRegex is used to match the direct link of the file from the response of the API. We originally use this to prevent
  // unauthorised use of the proxied download feature - but that is disabled for now. So you can safely ignore this settings.
  directLinkRegex: 'public[.].*[.]files[.]1drv[.]com',

  // Cache-Control header, check Vercel documentation for more details. The default settings imply:
  // - max-age=0: no cache for your browser
  // - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
  // - stale-while-revalidate: allow serving stale content while revalidating on the edge
  // https://vercel.com/docs/concepts/edge-network/caching
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
