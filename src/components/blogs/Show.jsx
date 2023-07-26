import React, { useState }from 'react'
import { useParams } from "react-router-dom";
import Heading from "../temps/Heading";
import Footer from "../temps/Footer";

import fb from '../firebase';
const db = fb.firestore()
const Blogs = db.collection('blogs');


const BlogView = () => {
    const { id } = useParams();

    const [blog, setblog] = useState([]);
    Blogs.doc(id).get().then((snapshot) => {
        const data = snapshot.data();
        setblog(data);
    });

    return (
        <div>
        <Heading />
            <div className="wrapper">
                <h1 className="">
                  {blog.Title}
                </h1>

body
            </div>
            <Footer />
        </div>
    );
};

export default BlogView;


// <span><b>Title :</b></span>
// <span>{blog.Title}</span>
// <p><b>Body :</b></p>
// <p>{blog.Body}</p>
