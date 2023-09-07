import React, { useEffect } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const Uyeler = (props) => {
  const { members, editMember } = props;
  return (
    <div className="members">
      {members.map((member) => (
        <Card
          color="dark"
          inverse
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src={member.img} />
          <CardBody>
            <CardTitle tag="h5">{member.name}</CardTitle>
            <CardSubtitle className="mb-2 " tag="h6">
              {member.email}
            </CardSubtitle>
            <CardSubtitle className="mb-2 " tag="h6">
              {member.rol}
            </CardSubtitle>
            <Button
              style={{ display: "inline-block", width: "100%" }}
              onClick={() => editMember(member)}
            >
              DÜZENLE
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Uyeler;
