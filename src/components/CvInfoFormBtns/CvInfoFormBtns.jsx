export const CvInfoFormBtns = ({ buttons, onEdit }) => {
  const handleOnClick = (e) => {
    const { value } = e.target;
    if (value === "Edit" && onEdit) {
      onEdit();
    }
  };

  return (
    <div className="cv-info-form-btns">
      {buttons.map(({ type, value }) =>
        value === "Edit" ? (
          <input
            key={`${type}-${value}`}
            type={type}
            value={value}
            onClick={handleOnClick}
          />
        ) : (
          <input key={`${type}-${value}`} type={type} value={value} />
        )
      )}
    </div>
  );
};
