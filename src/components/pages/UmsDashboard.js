import { useState } from 'react';
import { useUmsContext } from '../contexts/UmsContext';

const UmsDashboard = () => {
  const { users, addUser, updateUser, deleteUser } = useUmsContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  
  const [isEditingUserId, setIsEditingUserId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!userName || !password) {
      alert('Please fill all fields');
      return;
    }

    const userData = { username: userName,  firstName: firstName, lastName: lastName, password: password, isAdmin: isAdmin, sex:sex, email:email};

    if (isEditingUserId) {
      updateUser(isEditingUserId, userData);
    } else {
      addUser(userData);
    }

    resetForm();
  };

  const editUser = (user) => {
    setUserName(user.username);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setAge(user.age);
    setSex(user.sex);
    setPassword(user.password);
    setIsAdmin(user.isAdmin);
    setIsEditingUserId(user.id);
    setShowForm(true);
  };

  const resetForm = () => {
    setUserName('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setAge(0);
    setSex('');
    setPassword('');    
    setIsAdmin('');
    setIsEditingUserId(null);
    setShowForm(false);
  };

  return (
    <div className="category-manager" style={{ maxWidth: '800px', margin: '20px auto' }}>
      <button 
        onClick={() => setShowForm(true)}
        style={{ marginBottom: '20px', padding: '8px 16px' }}
      >
        Add New User
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc' }}>
          <h3>{isEditingUserId ? 'Edit User' : 'Add New User'}</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>User Name: </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>First Name: </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Last Name: </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Gender: </label>
            <input
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Age: </label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password: </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Admin Access: </label>
            <input
              type="checkbox"
              value={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>

          <button 
            type="submit"
            style={{ 
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none'
            }}
          >
            {isEditingUserId ? 'Update' : 'Add'}
          </button>
          <button 
            type="button"
            onClick={resetForm}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none'
            }}
          >
            Cancel
          </button>
        </form>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>S.No</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>User Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>First Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ padding: '12px' }}>{user.username}</td>
              <td style={{ padding: '12px' }}>{user.firstName}</td>
              <td style={{ padding: '12px' }}>{user.email}</td>
              <td style={{ padding: '12px' }}>
                <button
                  onClick={() => editUser(user)}
                  style={{
                    marginRight: '8px',
                    padding: '6px 12px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UmsDashboard;