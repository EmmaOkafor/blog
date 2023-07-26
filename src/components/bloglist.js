import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import Heading from "./temps/Heading";
import Footer from "./temps/Footer";

import fb from './firebase'
const db = fb.firestore()
const Blogs = db.collection('blogs');

const Bloglist = () => {
    const [blogslist, setblogs] = useState([]);

    const DeleteBlog = (id)=> {
        Blogs.doc(id).delete().then(() => {
            alert("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    useEffect(() => {
        // Subscribe to query with onSnapshot
        const unsubscribe = Blogs.limit(100).onSnapshot(querySnapshot => {
          // Get all documents from collection - with IDs
          const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          // Update state
          setblogs(data);
        });

        // Detach listener
        return unsubscribe;
      }, []);

    return (
      <div>
        <Heading />
          <div className="wrapper">
        <div className="row width-90">
        <h2 className="text-align-center">All blogs List</h2>
            {blogslist.map(blog=> (
                <div className="col-md-3 col-sm-3 ">
                    <div className="w3-white w3-margin w3-padding">
                    <div key={blog.id}>
                        <p>Title : {blog.Title}</p>
                        <p>body: {blog.Body} </p>
                        <div className = "row">
                        <div className="col-md-4 w3-padding">
                        <Link to={"/blog/"+blog.id}
                            className=""
                            >View
                        </Link>
                        </div>
                        <div className="col-md-4 w3-padding">
                        <Link to={"/blog/edit/"+blog.id}
                            className=""
                            >Edit
                        </Link>
                        </div>
                        <div className="col-md-4 w3-padding">
                        <button
                            onClick={()=> {DeleteBlog(blog.id)}}
                        >delete</button>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
            ))}
            </div>
            </div>
            <Footer />
    </div>
    );
  };

export default Bloglist;
