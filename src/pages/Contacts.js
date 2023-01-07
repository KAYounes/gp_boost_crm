import "./Contacts.css";
import ContactsList from "../components/contacts/ContactsList";
import ContactForm from "../pages/ContactForm";
import NoContacts from "../pages/NoContacts";
import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import userAdd from "../assets/icons/svg icons/vuesax/bulk/user-add.svg";
import search from "../assets/icons/svg icons/vuesax/bulk/search-normal.svg";
import ContactsDetails from "./CotactsDetails";
import { Routes, Route } from "react-router-dom";
import MultiSelect from "../UI/MultiSelect";

const Contacts = () => {
  const isEditing = useSelector((state) => state.isEditing);

  const dispatch = useDispatch();

  const onAddHadler = () => {
    dispatch({ type: "enableEditing" });
    dispatch({ type: "setCurrentContactID", contactID: null });
    dispatch({ type: "addingContact" });
  };
  // const ContactView =  ({isEditing && <ContactForm />} | {!isEditing && <NoContacts />})
  // const [contacts, setContacts] = useState(DUMMY_Contacts);

  // filter options
  const selectItems = [
    { option: "Punctual customers", value: "0" },
    { option: "Hibernating customers", value: "1" },
    { option: "Exceptional customers", value: "2" },
    { option: "Recent customers", value: "3" },
  ];

  return (
    <div className="contacts">
      <div className="all-contacts">
        <div className="search-bar">
          <button className="search">
            <img src={search} alt="search" />
          </button>
          <input type="text" placeholder="Search..." />
        </div>
        <Card className="control-actions">
          {/* <img src={userAdd} alt="add contact" /> */}
          <button className="btn positive" onClick={onAddHadler}>
            Add Contact
          </button>

          <MultiSelect name="Select Filter" selectItems={selectItems} />
        </Card>
        <ContactsList />
      </div>

      <div className="contact-view">
        {/* <Route path="/contacts/:contactID" element={<Contacts />}></Route>; */}
        {isEditing && <ContactsDetails />}
        {!isEditing && <NoContacts />}
      </div>
    </div>
  );
};

export default Contacts;
