const oktaAuthConfig = {
    issuer: `${process.env.REACT_APP_BASE_URL}/oauth2/default`,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "email", "profile"],
};

const oktaSignInConfig = {
    baseUrl: process.env.REACT_APP_BASE_URL,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: `${window.location.origin}/login/callback`,
    authParams: {},
    scopes: ["openid", "email", "profile"],
};

export { oktaAuthConfig, oktaSignInConfig };
