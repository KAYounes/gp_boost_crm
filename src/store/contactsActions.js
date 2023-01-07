import { uiActions } from "./ui-slice";
import { ContactsActions } from "./Contacts-slice";

export const fetchContactsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cxvuv.localtonet.com/api/getlabels/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch Contacts data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const ContactsData = await fetchData();
      //   dispatch(
      //     ContactsActions.replaceContacts({
      //       items: ContactsData.items || [],
      //       totalQuantity: ContactsData.totalQuantity,
      //     })
      //   );
    } catch (error) {
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Fetching Contacts data failed!",
      //     })
      //   );
    }
  };
};

export const sendContactsData = (Contacts) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Contacts data!",

      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/Contacts.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: Contacts.items,
            totalQuantity: Contacts.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Contacts data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Contacts data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Contacts data failed!",
        })
      );
    }
  };
};
**