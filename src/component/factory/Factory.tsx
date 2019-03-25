import React, { useState } from 'react';

const Factory = ({ children, endpoint }: any) => {

    const [ models, setModels ] = useState<any[]>([]);

    const update = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
            const newModels: any = await response.json();
            const asArray = newModels.length ? newModels : [ newModels ];
            setModels(asArray);
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    return children({update, models});
}

export default Factory;
