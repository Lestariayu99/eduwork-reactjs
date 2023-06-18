import React from "react";
import NewsApp from "./News/indexsatu";
import App from "./News/portal";


export default class PortalNews extends React.Component {

    render() {
        return (
            <div>
                <NewsApp />
                <App />
               
            </div>
        )
    }
}