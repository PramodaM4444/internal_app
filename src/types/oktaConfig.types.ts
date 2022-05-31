export interface OktaAuthConfig {
    issuer?: string;
    clientId: string;
    redirectUri: string;
    scopes?: string[];
}

export interface OktaConfig {
    config: OktaAuthConfig;
    onSuccess?: any;
    onError?: any;
}
