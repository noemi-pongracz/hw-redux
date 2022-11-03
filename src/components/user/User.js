import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions";

function User({ user }) {
  const dispatch = useDispatch();
  const fullName = user.firstName + " " + user.lastName;

  const handleEdit = () => {
    dispatch({
      type: "SET_CURRENT_USER",
      data: user.id,
    });
  };

  const handleDelete = () => {
    dispatch(deleteUser(user));
  };

  return (
    <div className="card" data-fullname={fullName}>
      <div className="card__content member">
        <div className="member__avatar">{Array.from(user.lastName)[0]}</div>
        <div className="member__info">
          <h4 className="member__name">{fullName}</h4>
          <p className="member__id">{user.id}</p>
          <p className="member__city">{user.address.city}</p>
        </div>
      </div>
      <div className="card__actions actions">
        <button className="actions__edit btn" onClick={handleEdit}>
          Edit
        </button>
        <button className="actions__delete btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default User;
