import {useParams, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";

function UserForm(props) {

    const [userId, setUserId] = useState(0);
    let { id } = useParams();
    const history = useHistory();

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        surname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        birthDate: Yup.date().required('Required'),
        email: Yup.string().required('Required'),
        password: Yup.string()
            .min(5, "Minimum five characters")
            .required('Required'),
        c_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        identity: Yup.string().required('Required')
    });

    useEffect(() => {
        props.setLinkActive(1);
        // props.userAPI.getUser(id, props.setUser);
        let search = props.users.filter(i => i.id == id);
        if(search.length !== 0) {
            props.setUser(search[0]);
            props.user.c_password = props.user.password;
        }
    }, []);


    const formik = useFormik({
        initialValues: props.user,
        validationSchema: formSchema,
        onSubmit: values => {
            props.userAPI.saveUser(values, setUserId, props.setMessage, history);
            props.setUpdated(true);
        }
    });


    return(
        <div className="container">
            <h2 className="text-center m-3">{props.user || props.user.id === 0 ? 'NEW ENTRY' : 'UPDATE ENTRY'}</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" type="text" className="form-control" defaultValue={formik.values.name} onChange={formik.handleChange} />
                    {formik.errors.name && formik.touched.name ? (
                        <span className="text-danger">{formik.errors.name}</span>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input name="surname" type="text" className="form-control" defaultValue={formik.values.surname} onChange={formik.handleChange} />
                    {formik.errors.surname && formik.touched.surname ? (
                        <span className="text-danger">{formik.errors.surname}</span>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="birthdate" className="form-label">Birth Date</label>
                    <input name="birthDate" type="date" className="form-control" defaultValue={formik.values.birthDate} onChange={formik.handleChange} />
                    {formik.errors.birthDate && formik.touched.birthDate ? (
                        <span className="text-danger">{formik.errors.birthDate}</span>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" defaultValue={formik.values.email} onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email ? (
                        <span className="text-danger">{formik.errors.email}</span>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" defaultValue={formik.values.password} onChange={formik.handleChange} />
                    {formik.errors.password && formik.touched.password ? (
                        <span className="text-danger">{formik.errors.password}</span>
                    ) : null}
                </div>
                { id == 0 ? (
                    <div className="mb-3">
                        <label htmlFor="c_password" className="form-label">Confirm Password</label>
                        <input name="c_password" type="password" className="form-control" defaultValue={formik.values.c_password} onChange={formik.handleChange} />
                        {formik.errors.c_password && formik.touched.c_password ? (
                            <span className="text-danger">{formik.errors.c_password}</span>
                        ) : null}
                    </div>
                ) : null}
                <div className="mb-3">
                    <label htmlFor="passport" className="form-label">Phone Number</label>
                    <input name="passportNumber" type="passport" className="form-control" defaultValue={formik.values.phone} onChange={formik.handleChange} />
                    {formik.errors.phone && formik.touched.phone ? (
                        <span className="text-danger">{formik.errors.phone}</span>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="identity" className="form-label">Identity</label>
                    <input name="identity" type="text" className="form-control" defaultValue={formik.values.identity} onChange={formik.handleChange} />
                    {formik.errors.identity && formik.touched.identity ? (
                        <span className="text-danger">{formik.errors.identity}</span>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="passport" className="form-label">Passport Number</label>
                    <input name="passportNumber" type="passport" className="form-control" defaultValue={formik.values.passportNumber} onChange={formik.handleChange} />
                    {formik.errors.passportNumber && formik.touched.passportNumber ? (
                        <span className="text-danger">{formik.errors.passportNumber}</span>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;