import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <button className="bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-white transition-all">
        {props.title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
