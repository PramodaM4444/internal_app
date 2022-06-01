import React, { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { OktaConfig } from "@customTypes/oktaConfig.types";

const OktaSignInWidget: React.FC<OktaConfig> = ({
    config,
    onSuccess,
    onError,
}) => {
    const widgetRef = useRef();
    useEffect(() => {
        const effect = () => {
            if (!widgetRef.current) return false;

            const widget = new OktaSignIn(config);

            widget
                .showSignInToGetTokens({
                    el: widgetRef.current,
                })
                .then(onSuccess)
                .catch(onError);
            return () => widget.remove();
        };
        effect();
    }, [config, onSuccess, onError]);

    return <div ref={widgetRef} />;
};

export default OktaSignInWidget;
