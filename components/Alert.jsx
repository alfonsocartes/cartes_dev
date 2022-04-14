export const Alert = ({ type, title, message }) => {
  switch (type) {
    case "SUCCESS":
      return (
        <div
          className="mt-4 rounded-lg bg-green-100 px-4 py-3 leading-normal text-green-700"
          role="alert"
        >
          <p className="font-bold">{title}</p>
          <p>{message}</p>
        </div>
      );
    case "WARNING":
      return (
        <div
          className="mt-4 rounded-lg bg-yellow-100 px-4 py-3 leading-normal text-yellow-700"
          role="alert"
        >
          <p className="font-bold">{title}</p>
          <p>{message}</p>
        </div>
      );
    case "ERROR":
      return (
        <div
          className="mt-4 rounded-lg bg-red-100 px-4 py-3 leading-normal text-red-700"
          role="alert"
        >
          <p className="font-bold">{title}</p>
          <p>{message}</p>
        </div>
      );
    default:
      return null;
  }
};
