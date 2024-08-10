import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPetSchema } from '../../schemas/schemas';
import { petAddThunk } from '../../redux/auth/operationsAuth';
import styles from './addPetForm.module.css';
import Icon from 'components/Icon/Icon';
import Select from 'react-select';

const AddPetForm = () => {
    const options = [
        { value: '', label: 'Show all' },
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'multiple', label: 'Multiple' },
        { value: 'unknown', label: 'Unknown' },
      ];
  const dispatch = useDispatch();

  const onSubmit = async evt => {
    console.log(evt);
    const formData = {
      title: evt.title,
      name: evt.name,
      imgUrl: evt.imgUrl,
      species: evt.species,
      birthday: evt.birthday,
      sex: evt.sex,
    };
    // const hasAvatar = evt.avatar.length > 0;
    // if (hasAvatar) {
    //   dispatch(updateUserAvatar(evt.avatar[0]))
    // }
    const isValid = await addPetSchema.isValid(formData);

    if (!isValid) {
      return;
    }

    dispatch(petAddThunk({ ...formData }));
  };

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors, isValid },
  } = useForm({
    initialValues: {
      title: '',
      name: '',
      imgUrl: '',
      species: '',
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapSex}>
          <label className={styles.female}>
            <input
              hidden
              {...register('sex')}
              name="sex"
              type="radio"
              value="female"
              id="sex-female"
            />
            <Icon width={20} height={20} name={'icon-female'} />
          </label>
          <label className={styles.male}>
            <input
              hidden
              {...register('sex')}
              name="sex"
              type="radio"
              value="male"
              id="sex-male"
            />
            <Icon width={20} height={20} name={'icon-male'} />
          </label>
          <label className={styles.multiple}>
            <input
              hidden
              {...register('sex')}
              name="sex"
              type="radio"
              value="multiple"
              id="sex-multiple"
            />
            <Icon width={20} height={20} name={'icon-Group'} />
          </label>
        </div>

        <div className={styles.wrapInput}>
          <div className={styles.wrapImg}>
            <Icon width={34} height={34} name={'icon-paw'} />
          </div>

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
            <button className={styles.upload}>
              <span>Upload photo</span>
              <Icon width={16} height={16} name={'icon-upload'} />
            </button>
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
              placeholder="Pet's Name"
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

            <Select
          options={options}
        //   styles={customStyles}
          placeholder={'By gender'}
        />

            {/* <label className={styles.label}>
              <select className={styles.input}
                {...register('species')}
                name="species"
                placeholder="Type of pet">
                    <option value=''>Type of pet</option>
                    <option value='dog'>Dog</option>
                    <option value='cat'>Cat</option>
                    <option value='monkey'>Monkey</option>
                </select> */}
              {/* {errors?.species && (
                <span className={styles.span}>
                  {errors?.species?.message || 'Errors!'}
                </span>
              )} */}
            {/* </label> */}
          </div>
        </div>

        <div className={styles.wrapTab}>
          {/* <button className={styles.tab}>Back</button> */}
          <button type="submit" disabled={!isValid} className={styles.tab}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
