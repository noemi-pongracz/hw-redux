import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../actions";

function AddForm() {
  const dispatch = useDispatch();

  const emptyUser = {
    firstName: "",
    lastName: "",
    address: {
      streetAndNumber: "",
      postalCode: "",
      city: "",
      country: "",
    },
    sports: [],
    gender: "",
    age: "",
    activity_class: "",
  };

  const [user, setUser] = useState(emptyUser);
  const formEl = useRef(null);

  const sports = [
    { id: 0, name: "edit-running", value: "running" },
    { id: 1, name: "edit-cycling", value: "cycling" },
    { id: 2, name: "edit-swimming", value: "swimming" },
    { id: 3, name: "edit-walking", value: "walking" },
    { id: 4, name: "edit-skiing", value: "skiing" },
  ];

  const isPartOfAddress = (fieldName) => {
    if (
      fieldName === "streetAndNumber" ||
      fieldName === "postalCode" ||
      fieldName === "city" ||
      fieldName === "country"
    )
      return true;
    else return false;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (isPartOfAddress(name))
      setUser({ ...user, address: { ...user.address, [name]: value } });
    else if (event.target.type === "checkbox") {
      const newSports = [...user.sports];
      const index = newSports.indexOf(value);
      if (index === -1) {
        newSports.push(value);
      } else {
        newSports.splice(index, 1);
      }
      setUser({ ...user, sports: newSports });
    } else setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    formEl.current.reset();
  };

  return (
    <section className="section add-member" id="add-member-section">
      <h2 className="section__title">Add new member</h2>
      <hr className="section__divider" />
      <form className="section__form form" ref={formEl} onSubmit={handleSubmit}>
        <div className="toast__container"></div>
        <div className="form__wrapper form__first-name-field">
          <label htmlFor="firstName" className="form__label">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            className="form__input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__wrapper form__last-name-field">
          <label htmlFor="lastName" className="form__label">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            className="form__input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__wrapper form__address-field">
          <label htmlFor="streetAndNumber" className="form__label">
            Address
          </label>
          <input
            type="text"
            name="streetAndNumber"
            className="form__input"
            onChange={handleChange}
            required
          />
        </div>
        <div className=" form__wrapper form__zip-code-field">
          <label htmlFor="postalCode" className="form__label">
            Zip code
          </label>
          <input
            type="text"
            name="postalCode"
            required
            pattern="[0-9]*"
            minLength="5"
            maxLength="6"
            className="form__input"
            onChange={handleChange}
          />
        </div>
        <div className=" form__wrapper form__city-field">
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form__input"
            onChange={handleChange}
            required
          />
        </div>
        <div className=" form__wrapper form__country-field">
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="form__input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__wrapper form__gender-field">
          <label htmlFor="gender" className="form__label">
            Gender
          </label>
          <select
            name="gender"
            className="form__select"
            defaultValue="not-specified"
            onChange={handleChange}
            required
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="not-specified">not specified</option>
          </select>
        </div>
        <div className="form__wrapper form__age-field">
          <label htmlFor="age" className="form__label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form__input"
            min="1"
            onChange={handleChange}
            required
          />
        </div>
        <div className=" form__wrapper form__activity-field">
          <div className="form__label">Activity className</div>
          <fieldset className="form__fieldset">
            <div className="radio-btn-wrapper">
              <input
                id="add-professional"
                type="radio"
                name="activity_class"
                value="professional"
                onChange={handleChange}
                required
              />
              <label htmlFor="add-professional">Professional</label>
            </div>
            <div className="radio-btn-wrapper">
              <input
                id="add-amateur"
                type="radio"
                name="activity_class"
                value="amateur"
                onChange={handleChange}
                required
              />
              <label htmlFor="add-amateur">Amateur</label>
            </div>
          </fieldset>
        </div>
        <div className="checkbox-section__wrapper form__sports">
          <h3 className="checkbox-section__title">Practiced sports</h3>
          {sports.map((sport) => (
            <div className="checkbox-wrapper" key={sport.id}>
              <input
                id={sport.name}
                type="checkbox"
                name="sports"
                value={sport.value}
                onChange={handleChange}
              />
              <label htmlFor={sport.name}>{sport.value}</label>
            </div>
          ))}
        </div>
        <input type="submit" value="Save" className="form__submit-btn btn" />
      </form>
    </section>
  );
}

export default AddForm;
