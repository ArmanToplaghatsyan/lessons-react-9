import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../firebase/firestore';
import { IUser } from '../../type/type';
import {Card} from 'react-bootstrap'

export const DetailsUser: React.FC = React.memo((): JSX.Element => {
  const { id } = useParams();
  const [use, setUse] = useState<IUser>({} as IUser)

  useEffect(() => {
    if (id)
      getUserById(id).then((res) => {
        console.log(res);
        setUse(res)
      });
  }, [id]);

  return (
    <div>
      <h2>Details User</h2>

    <Card>
      <Card.Title>{use.name}</Card.Title>
      <Card.Title>{use.surname}</Card.Title>
      <Card.Subtitle>{use.age}</Card.Subtitle>
      <Card.Text>{use.email}</Card.Text>
    </Card>
    </div>
  );
});
