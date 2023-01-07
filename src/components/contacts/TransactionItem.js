import "./TransactionItem.css";
import Card from "../../UI/Card";
const TransactionItem = (props) => {
  // key={transaction.id}
  // customerID={transaction.customerID}
  // description={transaction.description}
  // unitPrice={transaction.unitPrice}
  // quantity={transaction.quantity}
  // total={transaction.unitPrice * transaction.quantity}
  console.log(props.invoiceDate);
  // const month = props.invoiceDate.toLocaleString("en-US", {
  //   month: "long",
  // });
  // const day = props.invoiceDate.toLocaleString("en-US", {
  //   day: "2-digit",
  // });
  // const year = props.invoiceDate.getFullYear();
  // const time = props.invoiceDate.getTime();
  let date = props.invoiceDate
    .toLocaleString("en-US", { hour12: false })
    .replace(",", " ");
  date = date.replaceAll("/", "-");

  return (
    <Card className="transaction-item">
      <div className="transaction-description">{props.description}</div>
      <div className="unit-price">{props.unitPrice}$</div>
      <div className="quantity">{props.quantity}</div>
      <div className="total">{props.total.toFixed(2)}$</div>
      <div className="invoice-date">
        {date}
        {/* <div className="invoice-date__month">{month}</div>
          <div className="invoice-date__year">{year}</div>
          <div className="invoice-date__day">{day}</div>
          <div className="invoice-date__time">{time}</div> */}
      </div>
    </Card>
  );
};

export default TransactionItem;
