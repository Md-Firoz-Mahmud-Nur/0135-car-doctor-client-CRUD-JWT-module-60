import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookServices = () => {
  const service = useLoaderData();
  const { title, _id, price,img } = service;
  const { user } = useContext(AuthContext);
  console.log(user.displayName);
  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const dueAmount = form.dueAmount.value;
    const booking = {
      customerName: name,
      date,
      email,
      img,
      service:title,
      service_id: _id,
      dueAmount,
    };
    console.log(booking);

    fetch("http://localhost:5000/booking",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
        alert("data added")
      }
    })
  };

  return (
    <div>
      <h2>
        Book Services:{title} {"   "}
        {_id}
      </h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"

              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="dueAmount"
              defaultValue={"$ " + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default BookServices;
