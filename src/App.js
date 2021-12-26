import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/FriendList";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
