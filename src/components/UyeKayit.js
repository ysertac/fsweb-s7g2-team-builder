import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

export default function UyeKayit(props) {
  const { changeHandler, submitHandler, formData, membersFormSchema, errors } =
    props;
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    membersFormSchema.isValid(formData).then((valid) => setValid(valid));
  }, [formData]);
  return (
    <div className="uye-kayit">
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label>
            Adı-Soyadı:{" "}
            <Input
              name="name"
              placeholder="Ad-Soyad"
              value={formData.name}
              onChange={changeHandler}
            />
          </Label>
          <p className="error">{errors.name}</p>
        </FormGroup>
        <FormGroup>
          <Label>
            E-mail adresi:
            <Input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </Label>
          <p className="error">{errors.email}</p>
        </FormGroup>
        <FormGroup>
          <Label style={{ display: "flex", justifyContent: "space-between" }}>
            Kullanım Koşulları:
            <Input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={changeHandler}
            />
          </Label>
          <p className="error">{errors.terms}</p>
        </FormGroup>
        <FormGroup>
          <Label>
            Rolü:
            <Input
              name="rol"
              placeholder="rol"
              value={formData.rol}
              onChange={changeHandler}
            />
          </Label>
          <p className="error">{errors.rol}</p>
        </FormGroup>
        <FormGroup>
          <Input type="submit" value={"Kaydet"} disabled={!isValid} />
        </FormGroup>
      </Form>
      <Link className="homepage-link" exact to="/">
        Ana Sayfa
      </Link>
    </div>
  );
}
