import React from 'react';

export default function Form (handleChange, formInputData, handleSubmit){
    
    const isProductNameValid = formInputData.name.length > 25
  

    return (
        <div className="row justify-content-center my-5">
            <h2 className="text-detail col-lg-6 col-md-6 col-sm-6 col-6">Detail Product</h2>


            <form action="">
                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleDataList" className="form-label">Product Name</label>
                        <input 
                        className={`form-control ${isProductNameValid ? '' : 'is-valid'}`}
                        placeholder="Input your product name" 
                        list="datalistOptions" 
                        id="productname"
                        type="text"
                        onChange={handleChange}
                        value={formInputData.name}
                        name="name"/>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="container-form col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleDataList" className="label-choose">Product Category</label>
                        <select className="form-select form-select-sm" id="produkkategori" aria-label="Small select example">
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
                                name="flexRadioDefault" 
                                value="Brand New" 
                                id="flexRadioDefault2" 
                                />
                                <label htmlFor="flexRadioDefault2" className="form-check-label">Brand New</label>
                            </li>
                            <li className="list-group-item">
                                <input 
                                type="radio" 
                                className="form-check-input me-1" 
                                name="flexRadioDefault" 
                                value="Second Hand" 
                                id="flexRadioDefault2" 
                                />
                                <label htmlFor="flexRadioDefault2" className="form-check-label">Second Hand</label>
                            </li>
                            <li className="list-group-item">
                                <input 
                                type="radio" 
                                className="form-check-input me-1" 
                                name="flexRadioDefault" 
                                value="Refutbished" 
                                id="flexRadioDefault2" 
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
                        onChange={handleChange}
                        value={formInputData.price}
                        name="price"
                        >
                        </input>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="d-grid col-lg-6 col-md-6 col-sm-6 col-6">
                        <input 
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary"
                        ></input>
                    </div>
                </div>


            </form>
        </div>
        

    );
}