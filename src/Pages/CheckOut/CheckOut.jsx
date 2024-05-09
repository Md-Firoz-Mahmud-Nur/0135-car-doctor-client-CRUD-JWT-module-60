import { useLoaderData } from "react-router";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2>
        Book Services:{title} {"   "}
        {_id}
      </h2>
    </div>
  );
};

export default CheckOut;
