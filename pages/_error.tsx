import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div className="page-container ">
      <h2 className="!text-8xl f1 logo ">500</h2>
      <div className="w-fit h-fit">
        <div className="flex flex-col items-center ">
          <p className="text-3xl">An error has occurred.</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
