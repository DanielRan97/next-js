import React from "react";
import User from "../../components/user";

const authIndexPage = (props) => (

    <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <User name="Daniel" age={24}/>
    </div>

);

authIndexPage.getInitialProps = async (ctx) => {
    console.log(ctx);
    const promise = await {appName: 'Super App (Auth)'};
    return promise;
};

export default authIndexPage;