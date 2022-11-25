// import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import {
 Typography,
 Box,
 TextField,
 InputAdornment,
 Divider,
 Button,
} from "@mui/material";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
 PasswordRounded,
 DraftsOutlined,
 ErrorOutlineOutlined,
 AbcOutlined,
} from "@mui/icons-material";
// import * as AccountStlyes from "@/styles/Account.module.css"
// import { ErrorMessage } from "@hookform/error-message";
// import { DevTool } from "@hookform/devtools";

const Account = () => {
 const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Field may not be blank"),
  lastName: Yup.string().required("Field may not be blank"),
  email: Yup.string().required("Field may not be blank").email(),
  password1: Yup.string()
   .required("Field may not be blank")
   .min(8, "Password must be at 8 char long")
   .max(16, "Password Cannot be longer than 16 characters")
   .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
   ),
  password2: Yup.string()
   .required("Field may not be blank")
   .oneOf([Yup.ref("password1")], "Password do not match"),
  agreementChecked: Yup.bool().oneOf([true], "Field must be checked"),
 });
 const {
  control,
  handleSubmit,
  watch,
  formState: { errors, isDirty, dirtyFields },
  getValues,
 } = useForm({
  defaultValues: {
   firstName: "",
   lastName: "",
   email: "",
   password1: "",
   password2: "",
  },
  resolver: yupResolver(formSchema),
 });

 const onSubmit = (data) => alert("Cool!, but later.");

 return (
  <Box
   style={{
    backgroundColor: "#DFEBF6",
    color: "purple",
    borderRadius: "10px",
    padding: "10px",
    maxWidth: "auto",
   }}
  >
   <Typography style={{ fontWeight: "bold", color: "#0f0f0f" }}>
    Just hit it!
   </Typography>
   <Divider />
   <form
    onSubmit={handleSubmit(onSubmit)}
    style={{
     display: "flex",
     minWidth: "300px",
     flexDirection: "column",
     marginTop: "20px",
    }}
   >
    <Box
     style={{
      display: "flex",
      justifyContent: "space-around",
     }}
    >
     <Controller
      name="firstName"
      control={control}
      render={({ field }) => (
       <TextField
        {...field}
        size="small"
        id="firstName"
        label="First Name"
        variant="standard"
        style={{ padding: "5px", margin: "5px", width: "100%" }}
        error={errors.firstName ? true : false}
        helperText={errors.firstName?.message}
        InputProps={{
         startAdornment: (
          <InputAdornment position="start" style={{ marginRight: "10px" }}>
           <AbcOutlined fontSize="small" />
          </InputAdornment>
         ),
         endAdornment: errors.email ? (
          <InputAdornment position="end" style={{ marginLeft: "10px" }}>
           <ErrorOutlineOutlined fontSize="small" />
          </InputAdornment>
         ) : null,
        }}
       />
      )}
     />
     {/* <ErrorMessage
      errors={errors}
      name="firstName"
      render={({ message }) => <small>{message}</small>}
     /> */}

     <Controller
      name="lastName"
      control={control}
      render={({ field }) => (
       <TextField
        {...field}
        size="small"
        id="lastName"
        label="Last Name"
        variant="standard"
        style={{ padding: "5px", margin: "5px", width: "100%" }}
        error={errors.lastName ? true : false}
        helperText={errors.lastName?.message}
        InputProps={{
         startAdornment: (
          <InputAdornment position="start" style={{ marginRight: "10px" }}>
           <AbcOutlined fontSize="small" />
          </InputAdornment>
         ),
         endAdornment: errors.email ? (
          <InputAdornment position="end" style={{ marginLeft: "10px" }}>
           <ErrorOutlineOutlined fontSize="small" />
          </InputAdornment>
         ) : null,
        }}
       />
      )}
     />
    </Box>
    {/* <Box style={{ marginLeft: "10px", width: "240px" }}>
     <small color="red">Gender :</small>
     <Controller
      name="select"
      control={control}
      render={({ field }) => (
       <Select
        {...field}
        id="select"
        instanceId="select"
        isClearable
          // styles={customStyles}
          width='200px'
        options={[
         { value: "male", label: "Male" },
         { value: "female", label: "Female" },
         { value: "not-say", label: "Rather not say" },
        ]}
       />
      )}
     />
    </Box> */}
    <Box style={{ display: "flex", justifyContent: "space-around" }}>
     <Controller
      name="email"
      control={control}
      render={({ field }) => (
       <TextField
        {...field}
        size="small"
        id="email"
        label="Email"
        variant="standard"
        style={{ padding: "5px", margin: "5px", width: "100%" }}
        error={errors.email ? true : false}
        helperText={errors.email?.message}
        InputProps={{
         startAdornment: (
          <InputAdornment position="start" style={{ marginRight: "10px" }}>
           <DraftsOutlined fontSize="small" />
          </InputAdornment>
         ),
         endAdornment: errors.email ? (
          <InputAdornment position="end" style={{ marginLeft: "10px" }}>
           <ErrorOutlineOutlined fontSize="small" />
          </InputAdornment>
         ) : null,
        }}
       />
      )}
     />
    </Box>
    <Box style={{ display: "flex", justifyContent: "space-around" }}>
     <Controller
      name="password1"
      control={control}
      render={({ field }) => (
       <TextField
        {...field}
        size="small"
        id="password1"
        type="password"
        label="Password"
        variant="standard"
        style={{ padding: "5px", margin: "5px", width: "100%" }}
        error={errors.password1 ? true : false}
        helperText={errors.password1?.message}
        InputProps={{
         startAdornment: (
          <InputAdornment position="start" style={{ marginRight: "10px" }}>
           <PasswordRounded fontSize="small" />
          </InputAdornment>
         ),
         endAdornment: errors.email ? (
          <InputAdornment position="end" style={{ marginLeft: "10px" }}>
           <ErrorOutlineOutlined fontSize="small" />
          </InputAdornment>
         ) : null,
        }}
       />
      )}
     />
     <Controller
      name="password2"
      control={control}
      render={({ field }) => (
       <TextField
        {...field}
        size="small"
        id="password2"
        type="password"
        variant="standard"
        label="Confirm Password"
        style={{
         padding: "5px",
         margin: "5px",
         fontSize: "10px",
         width: "100%",
        }}
        error={errors.password2 ? true : false}
        helperText={errors.password2?.message}
        InputProps={{
         startAdornment: (
          <InputAdornment position="start" style={{ marginRight: "10px" }}>
           <PasswordRounded fontSize="small" />
          </InputAdornment>
         ),
         endAdornment: errors.email ? (
          <InputAdornment position="end" style={{ marginLeft: "10px" }}>
           <ErrorOutlineOutlined fontSize="small" />
          </InputAdornment>
         ) : null,
        }}
       />
      )}
     />
    </Box>
    <Box
     style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
     }}
    >
     <Link href="/">
      <a style={{ marginRight: "20px" }}>🏡</a>
     </Link>
     <Button
      type="submit"
      style={{ maxWidth: "100px", marginRight: "20px" }}
      className="bg-transparent hover:bg-white hover:text-green-700 hover:text-white py-1 px-2 border border-blue-500 rounded"
     >
      Submit
     </Button>
    </Box>
    {/* <DevTool control={control} /> */}
    <Typography style={{ fontSize: "10px" }}>
     <i>{isDirty ? `Unsaved changes` : `No changes`}</i>
    </Typography>
   </form>
  </Box>
 );
};

export default Account;
