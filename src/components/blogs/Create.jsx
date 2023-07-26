import {useState} from 'react';
import Heading from "../temps/Heading";
import Footer from "../temps/Footer";
import fb from '../firebase';
const db = fb.firestore()
const Blogs = db.collection('blogs');

const CreateBlog= () => {
    const [title , SetTitle] = useState("");
    const [body , SetBody] = useState("");

    const sub = (e) => {
        e.preventDefault();
        // Add data to the store
        Blogs.add({
            Title: title,
            Body: body,
            publish: false,
            published_on: fb.firestore.Timestamp.fromDate(new Date())
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    return (
    <div>
    <Heading />
      <div className="wrapper">

        <form onSubmit={(event) => {sub(event)}}>
            <div className="w3-margin w3-padding">
              <input type="text" placeholder="Title" className="form-control"
              onChange={(e)=>{SetTitle(e.target.value)}} required />
            </div>

            <div className="w3-margin w3-padding">
            <textarea  name="content" type="text" placeholder="write your content here" className="form-control"
            rows="10" cols="150" onChange={(e)=>{SetBody(e.target.value)}} required >
            </textarea>
            </div>

            <div className="w3-margin w3-padding btn btn-primary">
            <button type="submit" className="form-control">Submit</button>
            </div>
        </form>
        </div>
    <Footer />
    </div>

    );
}

export default CreateBlog;
