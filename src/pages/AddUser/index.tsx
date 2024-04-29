import React from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from '../../type/type';
import { addUser } from '../../firebase/firestore';

export const AddUser: React.FC = React.memo((): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();
  const save = (data: IUser): void => {
    console.log(data);
    addUser(data).then(console.log).catch(console.warn);
    reset();
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit(save)}>
        <input
          type="text"
          {...register('name', { required: 'Invalid name' })}
          placeholder="name"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="text"
          {...register('surname', { required: 'Invalid surname' })}
          placeholder="surname"
        />
        {errors.surname && <p>{errors.surname.message}</p>}

        <input
          type="text"
          {...register('age', {
            required: 'Invalid age',
            pattern: { value: /\d+$/, message: 'NaN' },
          })}
          placeholder="age"
        />
        {errors.age && <p>{errors.age.message}</p>}

        <input
          type="text"
          {...register('email', { required: 'Invalid email' })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">save</button>
      </form>
    </div>
  );
});
