import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user);
    const handleUpdateUser = e=>{
        e.preventDefault();
        const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);
    }
    return (
        <div>
            <form className="form border border-accent p-5" onSubmit={handleUpdateUser}>
        <input
          className="border-3 p-3"
          type="text"
          name="name"
          defaultValue={user.name}
        />
        <br />
        <br />
        <input
          className=" border-3 p-3"
          type="email"
          name="email"
          defaultValue={user.email}
        />
        <br />
        <br />
        <input className="btn btn-accent" type="submit" value="Update" />
      </form>
        </div>
    );
};

export default UpdateUser;