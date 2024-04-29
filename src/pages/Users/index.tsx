import React, { useEffect, useState } from 'react';
import { deleteUserById, getUsers } from '../../firebase/firestore';
import { IUser } from '../../type/type';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Users: React.FC = React.memo((): JSX.Element => {
  const [user, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res);
        setUser(res);
      })
      .catch(console.warn);
  }, []);
  return (
    <div>
      <h2>users</h2>
      <Table variant="info">
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>see</th>
            <th>&times;</th>
          </tr>
        </thead>
        <tbody>
          {user.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>{elm.name}</td>
                <td>{elm.surname}</td>
                <td><Link  to={'userDetails/'+elm.id} >See More</Link></td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() =>
                      deleteUserById(elm.id).then((res) => {
                        console.log(res);
                        getUsers()
                          .then((res) => {
                            console.log(res);
                            setUser(res);
                          })
                          .catch(console.warn);
                      })
                    }
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
});
