import React from "react";

import userData from "../data/user.json";
import statData from "../data/statistical-data.json";
import friendsData from "../data/friends.json";
import transactionsData from "../data/transactions.json";

import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendsList from "./friends/FriendsList";
import TransactionHistory from "./transactions/TransactionHistory";

const App = () => (
  <div>
    <Profile
      avatar={userData.avatar}
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      stats={userData.stats}
    />
    <Statistics title="Upload stats" stats={statData} />
    <FriendsList friends={friendsData} />
    <TransactionHistory transactions={transactionsData} />
  </div>
);

export default App;
