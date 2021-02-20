// import './App.css';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend-list/friends.json';
import FriendList from './components/friend-list/FriendList';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import Container from './components/Container/Container';
function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
