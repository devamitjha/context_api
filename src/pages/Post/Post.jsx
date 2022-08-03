import React, {useEffect,useState} from 'react';
import data from '../../components/Data';
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
//   const [avatar, setavatar] = useState("");
//   useEffect(() => {
//     const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//         setavatar(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
// }, []);
  return (
    <div className="col-sm-12">
      {data.filter(post => post.id == id).map(item => (
        <div className="card" key={item.id}>
          <div className="card-body">
          
            <h4 className="card-title">
              {item.title}
            </h4>
            <p className="card-text clamp_2"> {item.body}</p>
          </div>
        </div>
      ))}      
    </div>
  )
}

export default Post
