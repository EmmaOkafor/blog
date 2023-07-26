const BlogView = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    Blogs.doc(id).get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setBlog(data);
      }
    });
  }, [id]);

  return (
    <div>
      <Heading />
      <div classNameNameName="">
        <h1 classNameNameName="">
          <span>
            <b> Title: {blog.Title}</b>
          </span>
        </h1>
        <p>
          <b>Body :</b>
        </p>
        <p>{blog.Body}</p>
      </div>
      <Footer />
    </div>
  );
};
