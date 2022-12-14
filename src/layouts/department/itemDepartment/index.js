/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function ItemDepartment({ stt, khoa, hide }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDBox
      pl={3}
      display="flex"
      height="3.5rem"
      borderBottom="0.2px solid #f0f2f5"
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <MDTypography variant="caption" color="text" fontWeight="medium" width="10%" textAlign="left">
        {stt}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="20%" textAlign="left">
        {khoa}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={-2} width="40%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={0} width="40%">
          <MDBox mr={6} ml={2}>
            <MDButton variant="text" color="error" disabled>
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
          <MDButton
            variant="text"
            color={darkMode ? "white" : "dark"}
            onClick={handleClickOpen}
            disabled
          >
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        </MDBox>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ml="43%">Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Khoa"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

ItemDepartment.propTypes = {
  stt: PropTypes.string.isRequired,
  khoa: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default ItemDepartment;
