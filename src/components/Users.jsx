import React from 'react';

const Users = () => {
    const handleAddUser = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.name.value;
        const users = {name, email};
        console.log(users);
    }
    return (
        <div>
            <form action="" onSubmit={handleAddUser}>
                <input className='border-2' type="text" name='name' placeholder='Type your name' />
                <br /><br />
                <input className='border-2' type="email" name='email' placeholder='Type your email' /><br /><br />
                <input className='btn' type="submit" value="Submit"  />
            </form>
        </div>
    );
};

export default Users;