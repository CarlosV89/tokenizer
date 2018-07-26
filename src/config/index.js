const env = process.env;

const config = {
  auth: {
    // OPTIONAL - Configuration for cookie storage
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: '.qual.is',
      // OPTIONAL - Cookie path
      expires: 365,
      path: '/',
      // OPTIONAL - Cookie expiration in days
      // OPTIONAL - Cookie secure flag
      secure: true
    },
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: true,
    // REQUIRED - Amazon Cognito Region
    region: env.REACT_APP_AWS_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: env.REACT_APP_AWS_COGNITO_WEB_CLIENT_ID,
  },
};

export default config;
