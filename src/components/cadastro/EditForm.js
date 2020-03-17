import { withFormik } from "formik";
import * as yup from 'yup';
import { FormTask } from "./Form";
import { defaullTextError } from "../../defaults/constants";

export default withFormik({
    mapPropsToValues: (props) => ({
        titulo: '',
        descricao: '',
        datahora: '',
        endereco: {},
        ...props.newvalues
    }),
    validationSchema: yup.object().shape({
        titulo: yup.string().required(defaullTextError),
        datahora: yup.string().required(defaullTextError),
        //'endereco.logradouro': yup.string().required(defaullTextError),
    }),
    handleSubmit: (values, formikprops) => {
        formikprops.props.register(formikprops.props.ìdTask, values);
    }
})(FormTask)