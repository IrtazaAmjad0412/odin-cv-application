export const CvInfoFormBtns = ({ buttons }) => {
  return (
    <div className="cv-info-form-btns">
      {buttons.map(({ type, value }) => (
        <input key={`${type}-${value}`} type={type} value={value} />
      ))}
    </div>
  );
};
