const Alert = ({ type, title, message }) => {
  switch (type) {
    case "SUCCESS":
      return (
        <div
          className="mt-4 px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg"
          role="alert"
        >
          <p className="font-bold">{title}</p>
          <p>{message}</p>
        </div>
      );
    case "WARNING":
      return (
        <div
          className="mt-4 px-4 py-3 leading-normal text-yellow-700 bg-yellow-100 rounded-lg"
          role="alert"
        >
          <p className="font-bold">{title}</p>
          <p>{message}</p>
        </div>
      );
    case "ERROR":
      return (
        <div
          className="mt-4 px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg"
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

export default Alert;
