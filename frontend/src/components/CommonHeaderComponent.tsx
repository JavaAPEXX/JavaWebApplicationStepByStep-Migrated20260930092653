import React from 'react';

type CommonHeaderComponentProps = {
    data?: Record<string, any>;
};

export const CommonHeaderComponent: React.FC<CommonHeaderComponentProps> = ({ data = {} }) => {

    return (
        <div className="commonheadercomponent-wrapper">
            <div><h3>CommonHeaderComponent</h3><p>Modernized view component.</p></div>
        </div>
    );
};

export default CommonHeaderComponent;
