import React from "react";
import { withRouter } from "react-router-dom";

const BackButton = ({ history }) =>
  history.length > 1 && (
    <button onClick={history.goBack}>Back to previous page</button>
  );

export default withRouter(BackButton);
