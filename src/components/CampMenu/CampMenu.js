const CampMenu = ({ id, title, onClick }) => {
  return (
    <div onClick={onClick} id={id}>
      {title}
    </div>
  );
};

export default CampMenu;
