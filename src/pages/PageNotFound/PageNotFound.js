import React from 'react';
import { FoundContent } from './PageNotFound.styles'
import image from '../../images/not.svg';

const PageNotFound = () => {
    return <FoundContent>
        <img src={image} alt="not-found" />
        <h1>Page not found</h1>
    </FoundContent>;
};

export default PageNotFound;
