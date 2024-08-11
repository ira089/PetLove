import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import styles from './modalEditUser.module.css'
import Icon from 'components/Icon/Icon';

const ModalEditUser = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');

  const submit = evt => {
    const formData = {
      title: evt.title,
      name: evt.name,
      imgURL: evt.imgUrl,
      species: evt.species.value,
      birthday: evt.birthday,
      sex: evt.sex,
    };
    console.log(formData);
    // dispatch(petAddThunk(formData));
  };

  const {
    register,
    handleSubmit,
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
    // resolver: yupResolver(addPetSchema),
  });

  const handleFileChange = e => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      const urlImg = `https://${file.name}`;
      // console.log(urlImg)
      setAvatarUrl(urlImg);
      //  setValue('imgUrl', urlImg)
    }
  };

  return (
    <div>
      <h3>Edit information</h3>
      <form onSubmit={handleSubmit(submit)} autoComplete="off">
      {avatarPreview ? (
          <img className={styles.img} src={avatarPreview} alt="pet" />
        ) : (
          <div className={styles.wrapImg}>
            <Icon width={34} height={34} name={'icon-paw'} />
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

          <Button style={{textTransform: 'lowercase'}} type="submit" disabled={!isValid}>Go to profile</Button>

      </form>
      
    </div>
  )
}

export default ModalEditUser