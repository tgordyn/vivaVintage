import "./Confirmation.css";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="Confirmation">
      <div className="content">
        <Typography variant="h4">Success</Typography>
        <Typography variant="body2">
          Congratulations, on your purchase. The order has been received and is
          being processed.
        </Typography>
        <Typography variant="body2">
          <em>
            This is for demo purposes only. You have not been charged, the order
            is not being processed.
          </em>
        </Typography>
        <div className="buttons">
          <Button variant="text" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
