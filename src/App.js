import "./Styles/App.css";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import ImageSlider from "./Components/ImageSlider";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        !isSubmit ? e.preventDefault() : console.log("");
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = "name is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "invalid email address!";
        }

        if (!values.message) {
            errors.message = "This field is required";
        }
        return errors;
    };

    return (
        <div className="App">
            <NavigationBar />
            <ImageSlider />
            <Cards />

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>CONTACT US</h2>
                    <div className="input-container">
                        <div className="field">
                            <label>Name</label>
                            <input className={formErrors.name ? "form-error" : ""} type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} />
                            <p className="error-message">{formErrors.name}</p>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input className={formErrors.name ? "form-error" : ""} type="text" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
                            <p className="error-message">{formErrors.email}</p>
                        </div>
                        <div className="field">
                            <label>Message</label>
                            <textarea className={formErrors.name ? "form-error" : ""} name="message" placeholder="Enter a message" value={formValues.message} onChange={handleChange} />
                            <p className="error-message">{formErrors.message}</p>
                        </div>
                        <button className="submit-button">SUBMIT</button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default App;
