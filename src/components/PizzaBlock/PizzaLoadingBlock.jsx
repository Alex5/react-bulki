import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={534}
            viewBox="0 0 300 534"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="138" cy="138" r="138" />
            <rect x="2" y="296" rx="0" ry="0" width="273" height="35" />
            <rect x="1" y="356" rx="0" ry="0" width="274" height="54" />
            <rect x="2" y="437" rx="0" ry="0" width="86" height="31" />
            <rect x="122" y="432" rx="0" ry="0" width="153" height="41" />
        </ContentLoader>
    );
}

export default PizzaLoadingBlock;