
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import { toast } from "react-toastify";
const User = (props) => {
  const history = useNavigate();
  const { _id, name, email, contactNumber } = props.user;
  const {setRefetch,refetch} = props;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then((res) => {
        setRefetch(!refetch);
        toast.success("user deleted successfully")
        return res.data})
      .then(() => history("/"))
  };

  return (
    <div className="card">
      <img src={"https://img.etimg.com/thumb/msid-88634316,width-1200,height-900,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg"} alt={name} />
      {/* <article>By {author}</article> */}
      <h3>{name}</h3>
      <p>{email}</p>
      <h3>contact : {contactNumber}</h3>
      <Button LinkComponent={Link} to={`/updateuser/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default User;