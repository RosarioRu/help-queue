import React from "react";
import Header from "./Header";

function App() {
  const name = "Thato";
  const name2 = "haley";
  return(
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;