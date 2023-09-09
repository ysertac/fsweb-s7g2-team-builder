import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UyeKayit from "./components/UyeKayit";
import Uyeler from "./components/Uyeler";
import membersData from "./data";
import * as Yup from "yup";

function App() {
  const formDataInitial = {
    img: "",
    name: "",
    email: "",
    rol: "",
    terms: false,
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(membersData);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rol: "",
    terms: "",
  });

  const membersFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("İsim giriniz")
      .min(3, "En az 3 karakter olmak zorunda"),
    email: Yup.string()
      .required("Email giriniz")
      .email("Geçerli bir email adresi giriniz"),
    rol: Yup.string().required("Görevi giriniz"),
    terms: Yup.boolean().oneOf([true], "Şartları kabul ediniz"),
  });

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.id) {
      let oldMember = members.findIndex((member) => member.id == formData.id);
      members[oldMember] = formData;
      setMembers([...members]);
    } else {
      let random = Math.round(Math.random() * 100);
      const newMember = {
        ...formData,
        ["img"]: `https://picsum.photos/200/220?random=${random}`,
        ["id"]: members[members.length - 1].id + 1,
      };
      setMembers([...members, newMember]);
    }
    setFormData(formDataInitial);
    history.push("/");
  };

  const editMember = (member) => {
    setFormData(member);
    history.push("/uyekayit");
  };

  const changeHandler = (e) => {
    let { value, type, name, checked } = e.target;
    value = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    Yup.reach(membersFormSchema, name)
      .validate(value)
      .then((response) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  return (
    <div className="main">
      <Switch>
        <Route exact path="/uyekayit">
          <UyeKayit
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            formData={formData}
            membersFormSchema={membersFormSchema}
            errors={errors}
          />
        </Route>
        <Route exact path="/">
          <Uyeler members={members} editMember={editMember} />
          <div className="main-link">
            <Link exact to="/uyekayit">
              Yeni üye kaydı için tıklayın
            </Link>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
