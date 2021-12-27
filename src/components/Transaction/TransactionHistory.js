import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHistoryHead}>
        <tr>
          <th className={css.transactionHistoryHeadItem}>Type</th>
          <th className={css.transactionHistoryHeadItem}>Amount</th>
          <th className={css.transactionHistoryHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={css.transactionHistoryBlock}>
            <td className={css.transactionHistoryItem}>{item.type}</td>
            <td className={css.transactionHistoryItem}>{item.amount}</td>
            <td className={css.transactionHistoryItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
