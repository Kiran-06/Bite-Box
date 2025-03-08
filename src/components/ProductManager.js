import { useEffect, useRef, useState } from 'react';
import { useProductContext } from './contexts/ProductContext';
import { useCategoryContext } from './contexts/CategoryContext';

function ProductManager(){
    const { products, addProduct, updateProduct, deleteProduct } = useProductContext();
    const { categories } = useCategoryContext();
    const [ categoryName, setCategoryName ] = useState('');
    const [ productName, setProductName ] = useState('');
    const [ productDesc, setProductDesc ] = useState('');
    const [ productPrice, setProductPrice ] = useState(0);
    const [ image, setImage ] = useState('');
    const [ categoryDropdown, setCategoryDropdown] = useState(false);
    const [filteredCategoryOptions, setFilteredCategoryOptions] = useState(categories);
    const [ editingProductId, setEditingProductId ] = useState(null);
    const [ showForm, setShowForm ] = useState(false);
    const wrapperRef = useRef(null);

    // Filter options whenever input value changes
    useEffect(() => {
        const filtered = categories.filter(category =>
            category.category_name.toLowerCase().includes(categoryName.toLowerCase())
        );
        setFilteredCategoryOptions(filtered);
    }, [categoryName, categories]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setCategoryDropdown(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        setCategoryName(e.target.value);
        setCategoryDropdown(true);
      };
    
      const handleOptionClick = (value) => {
        setCategoryName(value);
        setCategoryDropdown(false);
      };

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
        
        console.log(e);
        if (!categoryName || !productName || !image || !productDesc || !productPrice) {
          alert('Please fill all fields');
          return;
        }
    
        const productData = {category_name: categoryName, product_name: productName, product_desc: productDesc, product_price: productPrice, image };
    
        if (editingProductId) {
          updateProduct(editingProductId, productData);
        } else {
          addProduct(productData);
        }
    
        resetForm();
      };

      const editProduct = (product) => {
        setProductName(product.product_name);
        setCategoryName(product.category_name);
        setProductDesc(product.product_desc);
        setProductPrice(product.product_price);
        setImage(product.image);
        setEditingProductId(product.id);
        setShowForm(true);
      }

      const resetForm = () => {
        setCategoryName('');
        setProductName('');
        setProductDesc('');
        setProductPrice(0);
        setImage('');
        setEditingProductId(null);
        setShowForm(false);
      }

    return(
       <div className="product-manager" style={{ maxWidth: '1500px', margin: '20px auto' }}>

            <button 
                onClick={()=> setShowForm(true)}
                style={{ marginBottom: '20px', padding: '8px 16px' }}
            >Add New Product</button>

            {
                showForm && (
                    <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc' }}>
                        <h3>{editingProductId ? 'Edit Product': 'Add New Product'}</h3>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }} >Category: </label>
                            <div className="lookup-wrapper" ref={wrapperRef}>
                                <input
                                    type="text"
                                    value={categoryName}
                                    onChange={handleInputChange}
                                    onClick={() => setCategoryDropdown(true)}
                                    placeholder="Type to search..."
                                    style={{ width: '100%', padding: '8px' }}
                                />
                                
                                {categoryDropdown && (
                                    <div className="dropdown">
                                    {filteredCategoryOptions.length > 0 ? (
                                        filteredCategoryOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-item"
                                            onClick={() => handleOptionClick(option.category_name)}
                                        >
                                            {option.category_name}
                                        </div>
                                        ))
                                    ) : (
                                        <div className="dropdown-no-results">No matches found</div>
                                    )}
                                    </div>
                                )}
                                </div>

                        </div>


                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }} >Product Name: </label>
                            <input 
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                style={{ width: '100%', padding: '8px' }}
                            />
                        </div>


                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }} >Product Description: </label>
                            <input 
                                type="text"
                                value={productDesc}
                                onChange={(e) => setProductDesc(e.target.value)}
                                style={{ width: '100%', padding: '8px' }}
                            />
                        </div>


                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }} >Product Price: </label>
                            <input 
                                type="number"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
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
                            {editingProductId ? 'Update' : 'Add'}
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
                )
            }

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>S.No</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Category</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Product Name</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Product Description</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Product price</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Image</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={product.id} style={{ borderBottom: '1px solid #ddd' }} >
                               
                                <td style={{ padding: '12px', textAlign: 'center' }}>{index + 1}</td>
                                <td style={{ padding: '12px' }}>{product.category_name}</td>
                                <td style={{ padding: '12px' }}>{product.product_name}</td>
                                <td style={{ padding: '12px' }}>{product.product_desc}</td>
                                <td style={{ padding: '12px' }}>{product.product_price}</td>
                                <td style={{ padding: '12px' }}>
                                    <img 
                                    src={product.image} 
                                    alt={product.product_name} 
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
                                        onClick={() => editProduct(product)}
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
                                        onClick={() => deleteProduct(product.id)}
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
                        )
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager;