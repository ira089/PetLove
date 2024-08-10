import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import { addPetSchema } from '../../schemas/schemas';
// import { petAddThunk } from '../../redux/auth/operationsAuth';
import Icon from 'components/Icon/Icon';
import styles from './addPetForm.module.css';
import customStyles from '../Notices/customStyles';

const AddPetForm = () => {
  const [selectedSex, setSelectedSex] = useState(null);
  const handleChange = event => {
    console.log(event.target.value);
    setSelectedSex(event.target.value);
  };
  const options = [
    { value: '', label: 'Show all' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'unknown', label: 'Unknown' },
  ];
  // const dispatch = useDispatch();

  //   function changeImg(event) {
  //     console.log(event)
  //     const avatarNew = event.target.files[0]
  //     console.log(avatarNew)
  //     const file = new FileReader();
  //     file.onload = function () {
  //       setPreview(file.result);
  //     };
  //     file.readAsDataURL(avatarNew);
  // setValue("avatar", [avatarNew])
  //   }

  const submit = evt => {
    console.log(evt);
  };
  // const formData = {
  //   title: evt.title,
  //   name: evt.name,
  //   imgUrl: evt.imgUrl,
  //   species: evt.species,
  //   birthday: evt.birthday,
  //   sex: evt.sex,

  // const hasAvatar = evt.avatar.length > 0;
  // if (hasAvatar) {
  //   dispatch(updateUserAvatar(evt.avatar[0]))
  // }
  // const isValid = await addPetSchema.isValid(formData);

  // if (!isValid) {
  //   return;
  // }

  // dispatch(petAddThunk({ ...formData }));

  const {
    register,
    handleSubmit,
    control,
    // setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: '',
      name: '',
      imgUrl: '',
      species: {},
      birthday: '',
      sex: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(addPetSchema),
  });
  return (
    <div className={styles.wrapMyPet}>
      <h3 className={styles.title}>
        Add my pet / <span>Personal details</span>
      </h3>
      <form onSubmit={handleSubmit(submit)} autoComplete="off">
        <div className={styles.wrapSex}>
          <label>
            <input
              className={styles.femaleInput}
              hidden
              {...register('sex')}
              name="sex"
              type="radio"
              value="female"
              id="sex-female"
              // checked={selectedSex === 'female'}
              onChange={handleChange}
            />
            <div className={styles.female}>
              {selectedSex === 'female' ? (
                <Icon width={20} height={20} name={'icon-female-white'} />
              ) : (
                <Icon width={20} height={20} name={'icon-female'} />
              )}
            </div>
          </label>
          <label>
            <input
              className={styles.maleInput}
              hidden
              {...register('sex')}
              name="sex"
              type="radio"
              value="male"
              id="sex-male"
              onChange={handleChange}
            />
            <div className={styles.male}>
              {selectedSex === 'male' ? (
                <Icon width={20} height={20} name={'icon-male-white'} />
              ) : (
                <Icon width={20} height={20} name={'icon-male'} />
              )}
            </div>
          </label>
          <label>
            <input
              className={styles.multipleInput}
              hidden
              {...register('sex')}
              name="sex"
              type="radio"
              value="multiple"
              id="sex-multiple"
              onChange={handleChange}
            />
            <div className={styles.multiple}>
              {selectedSex === 'multiple' ? (
                <Icon width={20} height={20} name={'icon-multiple-white'} />
              ) : (
                <Icon width={20} height={20} name={'icon-Group'} />
              )}
            </div>
          </label>
        </div>

        {/* <div className={styles.wrapImg}>
            <Icon width={34} height={34} name={'icon-paw'} />
          </div> */}

        <div className={styles.uploadWrap}>
          <label className={styles.label}>
            <input
              className={styles.input}
              {...register('imgUrl')}
              name="imgUrl"
              placeholder="Enter URL"
              type="url"
            />
            {errors?.imgUrl && (
              <span className={styles.span}>
                {errors?.imgUrl?.message || 'Errors!'}
              </span>
            )}
          </label>

          <label>
            <input
              className={styles.upload}
              {...register('avatar')}
              type="file"
              name="avatar"
              placeholder="Upload photo"
              // onChange={changeImg}
            />
            <Icon width={16} height={16} name={'icon-upload'} />
          </label>
        </div>

        <label className={styles.label}>
          <input
            className={styles.input}
            {...register('title')}
            name="title"
            placeholder="Title"
            type="text"
          />
          {errors?.title && (
            <span className={styles.span}>
              {errors?.title?.message || 'Errors!'}
            </span>
          )}
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            {...register('name')}
            name="name"
            placeholder="Pets Name"
            type="text"
          />
          {errors?.name && (
            <span className={styles.span}>
              {errors?.name?.message || 'Errors!'}
            </span>
          )}
        </label>

        <div className={styles.uploadWrap}>
          <label className={styles.label}>
            <input
              className={styles.input}
              {...register('birthday')}
              name="birthday"
              placeholder="00.00.0000"
              type="date"
            />
            {errors?.birthday && (
              <span className={styles.span}>
                {errors?.birthday?.message || 'Errors!'}
              </span>
            )}
          </label>
          <Controller
            name="species"
            control={control}
            render={({ field }) => (
              <Select {...field} options={options} styles={customStyles} />
            )}
          />
        </div>
        <div className={styles.wrapTab}>
          <NavLink className={styles.link} to="/profile">
            Back
          </NavLink>
          <button type="submit" disabled={!isValid} className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
