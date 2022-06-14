import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Protected = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
        return < Redirect path='/signup' />
    }

    return children;
}

export default Protected