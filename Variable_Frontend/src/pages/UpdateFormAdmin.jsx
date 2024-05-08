import { Toast } from 'bootstrap';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from '../components';
import categoryService from '../services/category.service';
import productService from '../services/product.service';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function UpdateFormAdmin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.state;
  // const [categoryList, setCategoryList] = useState([]);
  let [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    expDate: null
  }
  );


  useEffect(() => {

    productService.getProductById(productId).then((resp) => {
      setProduct({
        name: resp.data.name,
        price: resp.data.price,
        description: resp.data.description,
        stock: resp.data.stock,
        categoryId: resp.data.categoryId,
        expDate: resp.data.expDate

      })
    })
  }, [])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState => {
      return {
        ...prevState,
        [name]: value
      };
    }));
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("In Handle Product ")
    console.log(product)
    productService.updateProduct(productId, product).then((resp) => {
      console.log(resp.data)
      toast.success("Product Updated", { autoClose: 1500 });
      navigate('/updateproduct')
    })
  }

  // return (
  //   <>
  //     <div className="container my-3 py-3" style={{
  //       backgroundColor: "#FFDDDD",
  //       borderRadius: "10px",  // Adds rounded corners
  //       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Adds a subtle box shadow
  //       border: "1px solid #E57373"  // Adds a subtle border
  //     }}>
  //       <h1 className="text-center">Update Product</h1>
  //       <hr />
  //       <div class="row my-4 h-100">
  //         <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
  //           <form onSubmit={handleAddProduct}>
  //             <div class="form my-3">
  //               <label for="PName">Product Name </label>
  //               <input
  //                 type="text"
  //                 class="form-control"
  //                 id="PName"
  //                 name="name"
  //                 value={product.name}
  //                 placeholder="Enter Product Name"
  //                 maxLength={20}
  //                 required
  //                 onChange={handleChange}
  //               />
  //             </div>


  //             <div class="form my-3">
  //               <label for="price">Product price</label>
  //               <br />
  //               <input
  //                 type="number"
  //                 class="form-control"
  //                 name="price"
  //                 id="price"
  //                 value={product.price}
  //                 placeholder="Enter Price Here"
  //                 onChange={handleChange}
  //                 required
  //                 maxLength={10}
  //               />
  //             </div>


  //             <div class="form my-3">
  //               <label for="description">Product Description </label>
  //               <textarea
  //                 class="form-control"
  //                 name="description"
  //                 id="description"
  //                 cols="60"
  //                 rows="10"
  //                 value={product.description}
  //                 placeholder="Enter Description Here"
  //                 onChange={handleChange}>
  //               </textarea>
  //             </div>

  //             <div class="form my-3">
  //               <label for="stock">Product Stock</label>
  //               <input
  //                 type="number"
  //                 class="form-control"
  //                 name="stock"
  //                 id="stock"
  //                 value={product.stock}
  //                 placeholder="Enter Stock Here"
  //                 onChange={handleChange}
  //                 required
  //                 maxLength={10}

  //               />
  //             </div>

  //             <div class="form my-3">
  //               <label for="expDate">Product expdate</label>
  //               <input
  //                 type="date"
  //                 class="form-control"
  //                 name="expDate"
  //                 id="expDate"
  //                 value={product.expDate}
  //                 placeholder="Enter Stock Here"
  //                 onChange={handleChange}
  //                 required

  //               />
  //             </div>


  //             <div className="text-center">
  //               <button class="my-2 mx-auto btn btn-dark" type="submit" >
  //                 Update
  //               </button>
  //             </div>
  //             <div className="text-center">
  //               <Link to="/updateproduct" state={product.id} class="my-2 mx-auto btn btn-dark">Cancel</Link>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer />
  //   </>
  // )



  return (
    <>
      <div className="container my-5 py-4" style={{ background: "linear-gradient(135deg, #333333, #AAAAAA)", color: "#FFFFFF", borderRadius: "15px" }}>
        <h1 className="text-center mb-4" style={{ color: "red" }}>Update Product</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-6 col-lg-6 col-sm-10 mx-auto">
            <form onSubmit={handleAddProduct}>
              <div className="form-group">
                <label htmlFor="PName" style={{ color: "#FFFFFF" }}>Product Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="PName"
                  name="name"
                  value={product.name}
                  placeholder="Enter Product Name"
                  maxLength={20}
                  required
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">
                <label htmlFor="price" style={{ color: "#FFFFFF" }}>Product Price:</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  id="price"
                  value={product.price}
                  placeholder="Enter Price Here"
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" style={{ color: "#FFFFFF" }}>Product Description:</label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  cols="60"
                  rows="5"
                  value={product.description}
                  placeholder="Enter Description Here"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="stock" style={{ color: "#FFFFFF" }}>Product Stock:</label>
                <input
                  type="number"
                  className="form-control"
                  name="stock"
                  id="stock"
                  value={product.stock}
                  placeholder="Enter Stock Here"
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
              </div>

              <div className="form-group">
                <label htmlFor="expDate" style={{ color: "#FFFFFF" }}>Product Expire Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="expDate"
                  id="expDate"
                  value={product.expDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button className="my-3 mx-auto btn btn-primary" type="submit" style={{ backgroundColor: "#FF6666", borderColor: "#FF6666" }}>
                  Update
                </button>

              </div>

              <div className="text-center">
                <Link
                  to="/updateproduct"
                  state={product.id}
                  className="my-2 mx-auto btn btn-secondary" style={{ color: "#FFFFFF" }}>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );




}

export default UpdateFormAdmin