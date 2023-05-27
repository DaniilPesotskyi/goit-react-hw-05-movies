import css from './Loader.module.css';

const Loader = isLoad => {
  return (
    <>
      {isLoad && (
        <div className={css.loaderWrap}>
          <div className={css.loadingSpinner}>
            <div className={`${css.spinner} ${css.outer}`}>
              <div className={`${css.spinner} ${css.inner}`}>
                <div className={`${css.spinner} ${css.eye}`}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
