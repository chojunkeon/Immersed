import * as Yup from "yup";

const traineeAccountAddSchema = Yup.object().shape({
  userName: Yup.string().min(6).max(30).required("Minimum 6 characters Required"),
  password: Yup.string().min(6).max(30).required("Minimum 6 characters Required"),
  avatarUrl: Yup.string().required("Required"),
  zoneId: Yup.number().required("Required"),
  traineeId: Yup.number().required("Required"),
  trainingUnitId: Yup.number().required("Required"),
});

export default traineeAccountAddSchema;
