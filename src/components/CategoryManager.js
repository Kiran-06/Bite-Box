import { useState } from 'react';
import { useCategoryContext } from './contexts/CategoryContext';

const CategoryManager = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useCategoryContext();
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName) {
      alert('Please fill all fields');
      return;
    }

    const categoryData = { category_name: categoryName, image };

    if (editingCategoryId) {
      updateCategory(editingCategoryId, categoryData);
    } else {
      addCategory(categoryData);
    }

    resetForm();
  };

  const editCategory = (category) => {
    setCategoryName(category.category_name);
    setImage(category.image);
    setEditingCategoryId(category.id);
    setShowForm(true);
  };

  const resetForm = () => {
    setCategoryName('');
    setImage('');
    setEditingCategoryId(null);
    setShowForm(false);
  };

  return (
    <div className="category-manager" style={{ maxWidth: '800px', margin: '20px auto' }}>
      <button
        onClick={() => setShowForm(true)}
        style={{ marginBottom: '20px', padding: '8px 16px' }}
      >
        Add New Category
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc' }}>
          <h3>{editingCategoryId ? 'Edit Category' : 'Add New Category'}</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Category Name: </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Image: </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{
                  maxWidth: '100px',
                  marginTop: '10px',
                  display: 'block',
                  border: '1px solid #ddd'
                }}
              />
            )}
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
            {editingCategoryId ? 'Update' : 'Add'}
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
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Category Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Image</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ padding: '12px' }}>{category.category_name}</td>
              <td style={{ padding: '12px' }}>
                <img
                  src={category.image}
                  alt={category.category_name}
                  style={{
                    maxWidth: '50px',
                    maxHeight: '50px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </td>
              <td style={{ padding: '12px' }}>
                <button
                  onClick={() => editCategory(category)}
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
                  onClick={() => deleteCategory(category.id)}
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

export default CategoryManager;