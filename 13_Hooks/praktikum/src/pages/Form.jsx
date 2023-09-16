import React, {useState} from 'react';
import Swal from 'sweetalert2';

export default function Form ( ) {
    
   const [formData, setFormData] = useState({
    // id: 'null',
    name:"",
    category:"",
    freshness:"Brand New",
    price: ''
   });

   const [tableData, setTableData] = useState([]);
   const [editing, setEdit] = useState(false);

   const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormData({
        ...formData,
        [name]: value,
    });
   };   

   const generateRandomId = () => {
    return Math.floor(Math.random() * 100);
  };

   const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length > 25) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Last Name must not exceed 25 characters.",
            confirmButtonText: "OK"
          })
        return;
    } else if (formData.name.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid product name.",
            confirmButtonText: "OK"
          })
          return;
    } 

    const randomId = formData.id || generateRandomId();

    const dataWithId = { ...formData, id: randomId };
 
    if (editing) {
     const updateData = tableData.map((item) =>
         item.id === randomId ? dataWithId : item
     );
     setTableData(updateData);
     setEdit(false);
    } else {
         setTableData([...tableData, dataWithId]);
     }
 
         setFormData({
             name:"",
             category:"",
             freshness:"Brand New",
             price:0,
         });
 
 
    
        }

        const handleEdit = (id) => {
            const editItem = tableData.find((data) => data.id === id)
            if (editItem) {
                setFormData(editItem); 
                setEdit(true);

            }
        }

        const handleDelete = (index) => {
            const updateTable = [...tableData];
            updateTable.splice(index, 1);
            setTableData(updateTable);
            
        }
        
        




   
  

  

    return (
        <div className="row justify-content-center my-5">
            <h2 className="text-detail col-lg-6 col-md-6 col-sm-6 col-6">Detail Product</h2>


            <form action="" onSubmit={handleSubmit}>
                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleDataList" className="form-label">Product Name</label>
                        <input 
                            className="form-control"
                            placeholder="Input your product name" 
                            list="datalistOptions" 
                            id="productname"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleDataList" className="label-choose">Product Category</label>
                        <select 
                            className="form-select form-select-sm" 
                            id="produkkategori" 
                            aria-label="Small select example"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            >
                            <option selected>Choose</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </select>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Image of Product</label>
                            <input 
                            className="form-control" 
                            type="file" 
                            id="inputImage" />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="formFile" className="form-label">Product Freshness</label>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input 
                                type="radio" 
                                className="form-check-input me-1" 
                                name="freshness"
                                id="flexRadioDefault2" 
                                value={formData.freshness} 
                                onChange={handleInputChange}
                                />
                                <label htmlFor="flexRadioDefault2" className="form-check-label">Brand New</label>
                            </li>
                            <li className="list-group-item">
                                <input 
                                type="radio" 
                                className="form-check-input me-1" 
                                name="freshness"
                                id="flexRadioDefault2" 
                                value={formData.freshness} 
                                onChange={handleInputChange}
                                />
                                <label htmlFor="flexRadioDefault2" className="form-check-label">Second Hand</label>
                            </li>
                            <li className="list-group-item">
                                <input 
                                type="radio" 
                                className="form-check-input me-1" 
                                name="freshness"
                                id="flexRadioDefault2" 
                                value={formData.freshness} 
                                onChange={handleInputChange}
                                />
                                <label htmlFor="flexRadioDefault2" className="form-check-label">Refutbished</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form">
                            <label className="form-floating">Additional Description</label>
                            <textarea className="form-control" type="textarea" id="" />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <label className="form-label" htmlFor="exampleDataList">Product Price</label>
                        <input 
                        className="form-control" 
                        list="datalistOptions" 
                        id="productprice" 
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        >
                        </input>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="d-grid col-lg-6 col-md-6 col-sm-6 col-6">
                        <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                        ></input>
                    </div>
                </div>


            </form>

            <div className="">
                <table className="container table table-striped">
                    <thead className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Product Freshness</th>
                            <th>Product Price</th>
                            <th>Action</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.category}</td>
                            {/* <td>{data.image}</td> */}
                            <td>{data.freshness}</td>
                            {/* <td>{data.description}</td> */}
                            <td>{data.price}</td>
                            <td>
                                <button className='btn btn-danger mx-3' onClick={() => handleDelete(index)}>Delete</button>
                                <button className='btn btn-info text-white 'onClick={() => handleEdit(data.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
        
                    </tbody>
                </table>
            </div>
        </div>

        
        

    );
}