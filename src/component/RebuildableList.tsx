import React, { Children } from "react";

const RebuildableList = ({ loadMore, children }: any) => {

    // This would contain current rebuildable list logic

    return (
        <ul id={'RebuildableList'}>
            { Children.map(children, (child: any) => <li>{ child }</li>) }
            <button onClick={loadMore}>Rebuild List</button>
        </ul>
    );

}

export default RebuildableList;
