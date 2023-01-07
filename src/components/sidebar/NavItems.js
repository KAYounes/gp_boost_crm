import "./NavItems.css";
import NavItem from "./NavItem";

// icons
import home from "../../assets/icons/svg icons/vuesax/bulk/home-2.svg";
import contacts from "../../assets/icons/svg icons/vuesax/bulk/people.svg";
import companies from "../../assets/icons/svg icons/vuesax/bulk/buildings-2.svg";
import deals from "../../assets/icons/svg icons/vuesax/bulk/dollar-square.svg";
import documents from "../../assets/icons/svg icons/vuesax/bulk/document-text.svg";
import inbox from "../../assets/icons/svg icons/vuesax/bulk/direct-inbox.svg";
import calender from "../../assets/icons/svg icons/vuesax/bulk/calendar.svg";
import history from "../../assets/icons/svg icons/vuesax/bulk/timer.svg";
import reports from "../../assets/icons/svg icons/vuesax/bulk/diagram.svg";
import automation from "../../assets/icons/svg icons/vuesax/bulk/unlimited.svg";
import archive from "../../assets/icons/svg icons/vuesax/bulk/strongbox.svg";

const NavItems = () => {
  const items = [
    {
      id: 0,
      name: "Home",
      iconName: home,
    },
    {
      id: 1,
      name: "Contacts",
      iconName: contacts,
    },
    {
      id: 2,
      name: "Companies",
      iconName: companies,
    },
    {
      id: 3,
      name: "Deals",
      iconName: deals,
    },
    {
      id: 4,
      name: "documents",
      iconName: documents,
    },
    {
      id: 5,
      name: "Inbox",
      iconName: inbox,
    },
    {
      id: 6,
      name: "Calender",
      iconName: calender,
    },
    {
      id: 7,
      name: "History",
      iconName: history,
    },
    {
      id: 8,
      name: "Reports",
      iconName: reports,
    },
    {
      id: 9,
      name: "Automation",
      iconName: automation,
    },
    {
      id: 10,
      name: "Archive",
      iconName: archive,
    },
  ];
  return (
    <nav>
      <ul className="nav-list">
        {items.map((item) => (
          <NavItem
            key={item.id}
            itemName={item.name.toLowerCase()}
            iconName={item.iconName}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
