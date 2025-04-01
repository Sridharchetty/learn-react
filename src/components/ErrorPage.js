import { useRouteError } from "react-router";
const ErrorPage = () => {
  console.log(useRouteError());
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>Error!!! Something went wrong!!!</h1>
      <h2>
        {err.status}: {err.statusText}!!!!
      </h2>
    </div>
  );
};

export default ErrorPage;
