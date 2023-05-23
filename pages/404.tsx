import Head from "next/head";
import React from "react";

function FourOhFour() {
  return (
    <>
     <Head>
        <title>Not Found</title>
        <meta
            name="description"
            content={`404 not found error`}
          />
      </Head>
      <div className="page-container ">
        <h2 className="!text-8xl f1 logo ">404</h2>
        <p>The server couldn&apos;t find that page,</p>
      </div>
    </>
  );
}

export default FourOhFour;
