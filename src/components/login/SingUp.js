import { withFormik } from "formik";
import * as yup from 'yup'
import { Form } from "./Form";
import { defaullTextError } from "../../defaults/constants";

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: yup.object().shape({
        email: yup.string().email("email invalido.").required(defaullTextError),
        password: yup.string().required(defaullTextError)
    }),
    handleSubmit: (values, formikprops) => {
        formikprops.props.login(values)
    }

})(Form)