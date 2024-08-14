import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import * as params from '../../api/filterApi';
import { addPetSchema } from '../../schemas/schemas';
import { optionObjType } from '../../helpers/functions';
import { petAddThunk } from '../../redux/auth/operationsAuth';
import Icon from 'components/Icon/Icon';
import styles from './addPetForm.module.css';
import customStyles from './customStyles';

const AddPetForm = () => {
  // https://i.imgur.com/NXwlMD1.jpg
  const dispatch = useDispatch();
  // const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const [byType, setByType] = useState([]);
  // console.log(avatarPreview)

  useEffect(() => {
    const getData = async () => {
      try {
        const dataArr = await params.fetchSpecies();
        const dataObj = optionObjType(dataArr);
        setByType(dataObj);
      } catch (error) {
        return error.message;
      }
    };
    getData();
  }, []);

  const submit = evt => {

    const formData = {
      title: evt.title,
      name: evt.name,
      imgURL: evt.imgUrl,
      species: evt.species.value,
      birthday: evt.birthday,
      sex: evt.sex,
    };
    // console.log(formData);
    dispatch(petAddThunk(formData));
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
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

  const handleFileChange = e => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      // const urlImg = `https://${file.name}`;
      // console.log(urlImg)
      // setAvatarUrl(urlImg);
      //  setValue('imgUrl', urlImg)
    }
  };

  const selectedSex = watch('sex');
  const handleChange = value => {
    setValue('sex', value);
  };

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
              onChange={() => handleChange('female')}
            />
            <div className={styles.female}>
              {selectedSex === 'female' ? (
                <Icon className={styles.icon} name={'icon-female-white'} />
              ) : (
                <Icon className={styles.icon} name={'icon-female'} />
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
              onChange={() => handleChange('male')}
            />
            <div className={styles.male}>
              {selectedSex === 'male' ? (
                <Icon className={styles.icon} name={'icon-male-white'} />
              ) : (
                <Icon className={styles.icon} name={'icon-male'} />
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
              onChange={() => handleChange('multiple')}
            />
            <div className={styles.multiple}>
              {selectedSex === 'multiple' ? (
                <Icon className={styles.icon} name={'icon-multiple-white'} />
              ) : (
                <Icon className={styles.icon} name={'icon-Group'} />
              )}
            </div>
          </label>
        </div>

        {avatarPreview ? (
          <img className={styles.img} src={avatarPreview} alt="pet" />
        ) : (
          <div className={styles.wrapImg}>
            <Icon className={styles.iconPet} name={'icon-paw'} />
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
              // value={avatarUrl}
              // readOnly
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
        <div className={styles.wrapInput}>
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
            <label className={styles.labelDate}>
              <input
                className={styles.inputUrl}
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
                <Select {...field} options={byType} styles={customStyles} placeholder={'Type of pet'}/>
              )}
            />
          </div>
        </div>

        <div className={styles.wrapTab}>
          <NavLink className={styles.link} to="/profile">
            Back
          </NavLink>
          <button type="submit" disabled={!isValid}  className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
