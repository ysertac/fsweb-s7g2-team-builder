import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

export default function UyeKayit(props) {
  const { changeHandler, submitHandler, formData } = props;
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
        </FormGroup>
        <FormGroup>
          <Label style={{ display: "flex", justifyContent: "space-between" }}>
            Kullanım Koşulları:
            <Input type="checkbox" />
          </Label>
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
        </FormGroup>
        <FormGroup>
          <Input type="submit" value={"Kaydet"} />
        </FormGroup>
      </Form>
      <Link className="homepage-link" exact to="/">
        Ana Sayfa
      </Link>
    </div>
  );
}