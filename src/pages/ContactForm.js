import React, { useState, useEffect } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import trash from "..//assets//icons//svg icons/trash.svg";
import edit from "..//assets//icons//svg icons/edit.svg";
import { v4 as uuidv4 } from "uuid";

const ContactForm = (props) => {
  const dispatch = useDispatch();
  // const currentContactID = useSelector((state) => state.CurrentContactID);
  // const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);

  const isAdding = useSelector((state) => state.isAdding);
  const isPreviewing = useSelector((state) => state.isPreviewing);

  const addContactHandler = (Contact) => {
    dispatch({ type: "addContact", newContact: Contact });
    console.log("From Contact Handler");
    console.log(Contact);
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    delayError: 200,
    defaultValues: {
      ...props.currentContactData,
    },
  });

  const submitHandler = (data) => {
    const ContactData = {
      id: uuidv4(),
      segementType: "Spender",
      ...data,
    };
    addContactHandler(ContactData);
    reset();
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  // const enableEditingHandler = () => dispatch({ type: "enableEditing" });

  const formChangeHandler = () => {
    dispatch({ type: "changeFormState" });
  };
  const disableEditingHandler = () => dispatch({ type: "disableEditing" });

  return (
    <Card>
      {isAdding && <div className="adding-contact">Adding a new Contact</div>}
      {!isAdding && (
        <div className="editing-contact">
          <div className="btn positive form-state" onClick={formChangeHandler}>
            {/* <img className="btn-icon" src={edit} alt="edit" /> */}
            {!isPreviewing ? "Start Previewing" : "Start Editing"} &#8594;
          </div>
          <div className="form-header">
            {isPreviewing ? "Previewing" : "Editing"} an existing Contact
          </div>
        </div>
      )}
      {
        <fieldset disabled={isPreviewing}>
          <form disabled onSubmit={handleSubmit(submitHandler)}>
            {/* <div>
              <img src={trash} alt="trash" />
            </div> */}
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label for="type">Type</label>
                <select id="type" {...register("type", { required: true })}>
                  <option value="Lead">Lead</option>
                  <option value="Client">Client</option>
                </select>
              </div>

              <div className="new-contact__control">
                <label for="leadScore">Lead Score</label>
                <input
                  className={errors?.leadScore ? "error" : " "}
                  id="leadScore"
                  type="number"
                  placeholder="Lead Score"
                  {...register("leadScore", {
                    required: true,
                    min: {
                      value: 0,
                      message: "A score can't be a negative value",
                    },
                    max: {
                      value: 100,
                      message: "A score can't be more than 100",
                    },
                  })}
                />
                <p>{errors?.leadScore?.message}</p>
              </div>

              <div className="new-contact__control">
                <label for="title">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  {...register("title", { required: true, maxLength: 150 })}
                />
              </div>

              <div className="new-contact__control">
                <label for="company">Company</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company"
                  {...register("company", { required: true, maxLength: 150 })}
                />
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label for="firstName">First Name</label>
                <input
                  className={errors?.firstName?.message ? "error" : " "}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required.",
                    maxLength: 100,
                  })}
                />
                <p>{errors?.firstName?.message}</p>
              </div>

              <div className="new-contact__control">
                <label for="middleName">Middle Name</label>
                <input
                  className={errors?.middleName?.message ? "error" : " "}
                  id="middleName"
                  type="text"
                  placeholder="Middle name"
                  {...register("middleName", {
                    required: "’Middle name is required",
                    maxLength: 100,
                  })}
                />
                <p>{errors?.middleName?.message}</p>
              </div>

              <div className="new-contact__control">
                <label for="lastName">Last Name</label>
                <input
                  className={errors?.lastName?.message ? "error" : " "}
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last Name is required",
                    maxLength: 100,
                  })}
                />
                <p>{errors?.lastName?.message}</p>
              </div>

              <div className="new-contact__control">
                <label for="prfeix">Prefix</label>
                <select id="prefix" {...register("prefix", { required: true })}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div className="new-contact__control">
                <label for="age">Age</label>
                <input
                  className={errors?.age ? "error" : " "}
                  id="age"
                  type="number"
                  placeholder="Age"
                  {...register("age", {
                    required: "Age is required ",
                    min: {
                      value: 0,
                      message: "An age can't be a negative value",
                    },
                    max: {
                      value: 100,
                      message: "An age can't be more than 100",
                    },
                  })}
                />
                <p>{errors?.age?.message}</p>
              </div>

              <div className="new-contact__control">
                <label for="gender">Gender</label>
                <select id="gender" {...register("gender", { required: true })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>

              <div className="new-contact__control">
                <label for="emailTag">Tag</label>
                <input
                  id="emailTag"
                  type="text"
                  placeholder="Tag"
                  {...register("emailTag", { required: true, maxLength: 100 })}
                />
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label for="phone">Phone</label>
                <input
                  id="phone"
                  type="number"
                  placeholder="Phone"
                  {...register("phone", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </div>

              <div className="new-contact__control">
                <label for="phoneTag">Tag</label>
                <input
                  id="phoneTag"
                  type="text"
                  placeholder="Tag"
                  {...register("phoneTag", { required: true, maxLength: 100 })}
                />
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label for="country">Country</label>
                <input
                  id="country"
                  type="text"
                  placeholder="Country"
                  {...register("country", { required: true, maxLength: 100 })}
                />
              </div>

              <div className="new-contact__control">
                <label for="city">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  {...register("city", { required: true, maxLength: 100 })}
                />
              </div>

              <div className="new-contact__control">
                <label for="area">Area</label>
                <input
                  id="arge"
                  type="text"
                  placeholder="Area"
                  {...register("area", { required: true, maxLength: 100 })}
                />
              </div>

              <div className="new-contact__control">
                <label for="locationTag">Tag</label>
                <input
                  id="locationTag"
                  type="text"
                  placeholder="Tag"
                  {...register("locationTag", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
            </Card>
            <div className="new-contact__actions">
              {!isPreviewing && (
                <button
                  className="btn negative"
                  onClick={disableEditingHandler}
                  tybe="button"
                >
                  Cancel
                </button>
              )}

              {!isAdding && !isPreviewing && (
                <button className="btn positive" tybe="submit">
                  Save Changes
                </button>
              )}
              {isAdding && (
                <button className="btn positive" tybe="submit">
                  Add Contact
                </button>
              )}
            </div>

            {/* <input type="submit" /> */}
          </form>
        </fieldset>
      }{" "}
    </Card>
  );
};

export default ContactForm;
