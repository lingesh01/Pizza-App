import React, { useState } from 'react';
import { FeaturesContainer, FeaturesBtm } from "./Features.styles";
import { useHistory } from 'react-router-dom';


const Featues = () => {
    const history = useHistory();
    const [isloading, setisLoading] = useState(false);

    const cartHandler = () => {
        setisLoading(true);
        history.push("/cart");
    };

    return (
        <>
            {isloading && <p>Loading..</p>}
            <FeaturesContainer  >
                <h1>Pizza of the Day</h1>
                <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
                <FeaturesBtm onClick={cartHandler} >Order Now</FeaturesBtm>
            </FeaturesContainer>
        </>
    );
};

export default Featues;
