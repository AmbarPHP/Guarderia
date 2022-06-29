
import {useState} from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function TeacherForm (props){


        const [enteredName, setEnteredName]=useState('');
        const [enteredAmount , setEnteredAmount]=useState('');
        const [enteredDate, setEnteredDate]=useState('');

        const nameChangeHandler=(event)=>{
            setEnteredName(event.target.value);
        }

        const amountChangeHandler=(event)=>{
            setEnteredAmount(event.target.value);
        }

        const dateChangeHandler=(event)=>{
            setEnteredDate(event.target.value);
        }

        const submitHandler=(event)=>{
            event.preventDefault();

            const teacherData={
                name:enteredName,
                amount:enteredAmount,
                date: new Date(enteredDate),
            }

            //console.log(teacherData);
            props.saveTeacherData(teacherData);

            setEnteredName('');
        }

       return (
        <div>


      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={3}
          mt={3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Registrar Maestros
          </MDTypography>
        
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" onSubmit={submitHandler} role="form">
            <MDBox mb={2}>
              <MDInput type="nombre" label="Nombre"  value={enteredName} 
                    onChange={nameChangeHandler} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="amount" label="Cantidad"   
                    value={enteredAmount}
                    onChange={amountChangeHandler} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="date" value={enteredDate}
                    onChange={dateChangeHandler} fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Asignar a grupo
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info"  type="submit" >
                Guardar
              </MDButton>
              <MDButton variant="gradient" color="error">
                cancelar
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                No tiene una cuenta?{" "}
                <MDTypography
                  
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  registrese como usuario
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
        </div>
       )
}

export default TeacherForm;