import { useParams,useLocation } from "react-router-dom";

const PostDetail = () => {
  const { id, slug } = useParams();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  
  const name = queryParams.get('name'); //http://localhost:3001/posts/1?name=bikash&age=32
  const age=queryParams.get('age');

  console.log(location,name,age);


  return (
    <>
      <div>
        <h1>useParams hook</h1>
        Post Detail of {id} {slug ?? ""}
      </div>

      <div>
        <h1>Use Location Hook </h1>
      <p>Current Pathname: {location.pathname}</p>
      <p>Search String: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
    </>
  );
};

export default PostDetail;
