
const GallaryImg = ({img,...rest}) => {
    return (
        <a href={img} {...rest}>
                <img alt={`${img}`} src={img} className="rounded-lg"/>
              </a>
    );
};

export default GallaryImg;