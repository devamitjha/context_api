import React from 'react'
import { Link } from "react-router-dom";
import data from '../../components/Data';
import './Category.scss';

function Category() {
  return (
    <>
     <h3 className="category_title mb-5">Page title</h3>
      {
        data.map((item)=>{
          return(
            <div className="col-sm-6 col-md-3 mb-4" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {item.title.length>18?item.title.slice(0,18) + '...':item.title}
                  </h4>
                  <p className="card-text clamp_2">{item.body}</p>
                  <Link to={`/Post/${item.id}`} className="card-link">Card link</Link>
                </div>
              </div>
            </div>
          )
        })
      }      
    </>
    
    
  )
}

export default Category
