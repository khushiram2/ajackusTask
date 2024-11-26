import React, { useEffect, useState } from 'react'
import { addNewUser, deleteUser, getAllUsers, updateUser } from './UserList.api'

import './UserList.css';
import { PageSize, USERDATAFORMAT } from './UserList.constants';


const UserList = () => {
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([]);
  const [hasMoreDataToShow, setHasMoreDataToShow] = useState(true)
  useEffect(() => {
    if (hasMoreDataToShow) {

      getAllUsers(page).then((res) => {
        console.log(res.data)
        if (res.data.length > 0) {
          if (users.length === 0) {
            setUsers(res.data)
          } else {
            if (res.data.length < PageSize) {
              setHasMoreDataToShow(false)
            }
            setUsers(prev => prev.concat(res.data))
          }
        } else {
          setHasMoreDataToShow(false)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [page])
  return (
    <div>
      <UserManagement setPage={setPage} setUsers={setUsers} hasMoreDataToShow={hasMoreDataToShow} setHasMoreDataToShow={setHasMoreDataToShow} users={users} />
    </div>
  )
}




function UserManagement({ users, setUsers, setPage, hasMoreDataToShow, setHasMoreDataToShow }) {
  const [formData, setFormData] = useState(USERDATAFORMAT)
  const [editingUserId, setEditingUserId] = useState(null);
  const dialogRef = React.useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "companyname") {

      setFormData((prev) => ({ ...prev, company: { "name": value } }));
    } else {

      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingUserId) {
      const newUser = await addNewUser(formData)
      setUsers(prev => [...prev, newUser])
    } else {
      const editedUser = await updateUser(editingUserId, formData)
      setUsers(prev => prev.map((e) => {
        if (e.id === editingUserId) {
          return editedUser
        }
        return e
      }))
    }
    setFormData(USERDATAFORMAT);
    setEditingUserId(null);
    dialogRef.current.close();
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingUserId(user.id);
    dialogRef.current.showModal();
  };

  const openDialog = () => {
    setFormData(USERDATAFORMAT);
    setEditingUserId(null);
    dialogRef.current.showModal();
  };

  const handleDelete = async (id) => {
    await deleteUser(id)
    setUsers(prev => prev.filter(e => e.id !== id))
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <div className='table-wrapper' >

        <table className="user-table">
          <thead className='user-table-head' >
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='user-table-body' >
            {Array.isArray(users) &&
              users?.map((user) => (
                <tr key={user?.id}>
                  <td>{user?.id}</td>
                  <td>{user?.username}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.company?.name}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(user)}>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className='footer-wrapper' >

        <button className="add-user-btn" onClick={openDialog}>
          Add New User
        </button>
        {hasMoreDataToShow && <div onClick={() => setPage(prev => prev + 1)} className='more-btn' >More</div>
        }
      </div>

      <dialog ref={dialogRef} className="user-dialog">
        <h2>{editingUserId ? "Edit User" : "Add New User"}</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="UserName"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="companyname"
            value={formData.company.name}
            onChange={handleInputChange}
            placeholder="Company Name"
            required
          />
          <div className="dialog-actions">
            <button type="submit" className="submit-btn">
              {editingUserId ? "Update User" : "Add User"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => dialogRef.current.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default UserList;
