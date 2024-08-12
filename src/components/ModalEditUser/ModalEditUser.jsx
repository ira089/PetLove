import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectorsAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {editUserSchema} from '../../schemas/schemas';
import { editUserThunk} from '../../redux/auth/operationsAuth'
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import styles from './modalEditUser.module.css';

const ModalEditUser = () => {
  const dispatch = useDispatch();
  const { name, email, phone, avatar } = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
console.log(avatarPreview)
  const submit = evt => {
    // console.log(evt)
    const formData = {
      email: evt.email,
      name: evt.name,
      avatar:  evt.imgUrl,
      phone: evt.phone,
    };
    // console.log(formData);
    dispatch(editUserThunk(formData));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email:  email ,
      name:  name ,
      imgUrl: avatar,
      phone: phone,
    },
    mode: 'onBlur',
    resolver: yupResolver(editUserSchema),
  });

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      const urlImg = `https://${file.name}`;
      // console.log(urlImg)
      setAvatarUrl(urlImg);
       setValue('imgUrl', urlImg)
    }
  };

  return (
    <div>
      <h3 className={styles.title}>Edit information</h3>
      <form onSubmit={handleSubmit(submit)} autoComplete="off">
      {/* <img className={styles.img} src='http://localhost:3000/5d6b7523-eaca-49ab-9ae8-f630d7b288a0' alt="user" /> */}
        {avatarPreview ? (
          <img className={styles.img} src={avatarPreview} alt="user" />
        ) : (
          <div className={styles.avatar}>
            <Icon
              width={80}
              height={80}
              name={'icon-pipl'}
              fillColor="#f6b83d"
              stroke="#fff4df"
            />
          </div>
        )}

        <div className={styles.uploadWrap}>
          <label className={styles.labelUrl}>
            <input
              className={styles.inputUrl}
              {...register('imgUrl')}
              name="imgUrl"
              placeholder="Enter URL"
              type="text"
              value={avatarUrl}
              readOnly
            />
            {errors?.imgUrl && (
              <span className={styles.span}>
                {errors?.imgUrl?.message || 'Errors!'}
              </span>
            )}
          </label>

          <label className={styles.upload}>
            Upload photo
            <input
              {...register('avatar')}
              type="file"
              name="avatar"
              onChange={handleFileChange}
              hidden
            />
            <Icon width={16} height={16} name={'icon-upload'} />
          </label>
        </div>

        <div className={styles.labelWrap}>
          <label className={styles.label}>
            <input
              className={styles.input}
              {...register('name')}
              name="name"
              placeholder="Name"
              type="text"
            />
            {errors?.name && (
              <span className={styles.span}>
                {errors?.name?.message || 'Errors!'}
              </span>
            )}
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              {...register('email')}
              name="email"
              placeholder="Email"
              type="email"
            />
            {errors?.email && (
              <span className={styles.span}>
                {errors?.email?.message || 'Errors!'}
              </span>
            )}
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              {...register('phone')}
              name="phone"
              placeholder="phone"
              type="text"
            />
            {errors?.phone && (
              <span className={styles.span}>
                {errors?.phone?.message || 'Errors!'}
              </span>
            )}
          </label>
        </div>

        <Button type="submit" disabled={!isValid}>
          Go to profile
        </Button>
      </form>
    </div>
  );
};

export default ModalEditUser;
