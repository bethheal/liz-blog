import { useRouteError, Link } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  const statusText = error?.statusText || "Page Not Found";
  const message =
    error?.message || error?.error?.message || "An unknown error occurred.";

  return (
    <div className="bg-red-500 text-white h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Error!!</h1>
      <p className="text-xl font-semibold mb-2">{statusText}</p>
      <p className="text-lg mb-4">{message}</p>
      <p>
        You can go back to the{" "}
        <Link to="/" className="text-blue-200 underline">
          Home Page
        </Link>
        .
      </p>
    </div>
  );
}
