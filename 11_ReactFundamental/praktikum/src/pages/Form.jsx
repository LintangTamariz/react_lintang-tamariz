import React, {useState} from 'react';

export default function Form ( ) {
    
   const [formData, setFormData] = useState({
    name:"",
    category:"",
    freshness:"Brand New",
    price:0,
   });

   const [tableData, setTableData] = useState([]);

   const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormData({
        ...formData,
        [name]: value,
    });
   };   

   const genereteRandomId = () => {
    return Math.floor(Math.random() * 100);
    }

   const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.length > 25) {
        alert("Last Name must not exceed 25 characters")
        return;
    }

    const randomId = genereteRandomId();

    const dataWithId = { ...formData, id: randomId };
     
    
    

    setTableData([...tableData, dataWithId]);

    setFormData({
        name:"",
        category:"",
        freshness:"Brand New",
        price:0,
    });
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
                        </tr>
                    ))}
        
                    </tbody>
                </table>
            </div>
        </div>

        
        

    );
}