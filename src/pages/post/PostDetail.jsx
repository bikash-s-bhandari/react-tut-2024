import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id,slug } = useParams(); 
    return <>Post Detail of {id} {slug??''} </>;
  };
  
  export default PostDetail;
  