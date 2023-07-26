import React, { useEffect, useState }from 'react'
import { useParams } from "react-router-dom";
import Heading from "../temps/Heading";
import Footer from "../temps/Footer";
import fb from '../firebase';
const db = fb.firestore()
const Blogs = db.collection('blogs');


const BlogEdit = () => {
    const { id } = useParams();

    const [title , SetTitle] = useState("");
    const [body , SetBody] = useState("");

    useEffect( (id)=> {
        Blogs.doc(id).get().then((snapshot) => {
            const data = snapshot.data();
            SetTitle(data.Title);
            SetBody(data.Body);
        });
    },[]);

    const sub = (e) => {
        e.preventDefault();

        // Add data to the store
        Blogs.doc(id).update({
            Title: title,
            Body: body,
            last_Updated: fb.firestore.Timestamp.fromDate(new Date())
        })
        .then((docRef) => {
            alert("Data Successfully Updated");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    return (
        <div>
        <Heading />
          <div className="wrapper width-70">
          <form onSubmit={(event) => {sub(event)}}>
              <div className="w3-margin w3-padding">
              <input type="text" placeholder="Title" className="form-control"  value={title}
              onChange={(e)=>{SetTitle(e.target.value)}} required />
              </div>

              <div className="w3-margin w3-padding">
              <textarea  name="content" type="text" value={body}
              placeholder="write your content here"
              rows="10" cols="120" className="form-control" onChange={(e)=>{SetBody(e.target.value)}} required >
              </textarea>
              </div>

              <div className="w3-padding w3-margin">
              <button className="form-control" type="submit">Submit</button>
              </div>
          </form>
          </div>
        <Footer />
        </div>
    );
};

export default BlogEdit;
