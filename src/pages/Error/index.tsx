import { useRouteError } from "react-router-dom";

function isError(error: any): error is Error {
  return error instanceof Error;
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isError(error) && (error.name || error.message)}</i>
      </p>
    </div>
  );
}