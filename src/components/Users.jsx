import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  console.log("mongo users", users);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUsers = { name, email };
    console.log(newUsers);
    // create user to db
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after creating user", data);
        if (data.insertedId) {
          alert("user added successfully.");
          setUsers([...users, { _id: data.insertedId, ...newUsers }]);
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const handleDelete = ( id)=>{
    console.log('delete user',id);
    fetch(`http://localhost:5000/users/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            const remainingUsers = users.filter(user=>user._id !== id);
            setUsers(remainingUsers)
            console.log('after delete', data);
        }
    })
  }
  return (
    <div className="w-11/12 mx-auto">
        <h1>users : {users.length}</h1>
      <form className="form border border-accent p-5" onSubmit={handleAddUser}>
        <input
          className="border-3"
          type="text"
          name="name"
          placeholder="Type your name"
        />
        <br />
        <br />
        <input
          className=" border-3"
          type="email"
          name="email"
          placeholder="Type your email"
        />
        <br />
        <br />
        <input className="btn btn-accent" type="submit" value="Submit" />
      </form>
      {/* show users */}
      <div className="space-y-3 mt-3 ">
        {loading && <p>Loading users.........</p>}

        {users.map((user) => (
          <pre className="font-bold" key={user._id}>
            {user.name} 
          <Link className="btn btn-accent" to={`/users/${user._id}`}>  Details </Link>
          <Link className="btn btn-accent" to={`/update/${user._id}`}>  Edit </Link>

               <button className="btn btn-warning ml-2"  onClick={()=>handleDelete(user._id)}>x</button> 
            </pre>
        ))}
      </div>
    </div>
  );
};

export default Users;
