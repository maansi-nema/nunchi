import React from "react";
import MembershipsExpiringCard from "./MembershipsExpiringCard";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <MembershipsExpiringCard />
      </Container>
    </React.Fragment>
  );
}

export default App;
