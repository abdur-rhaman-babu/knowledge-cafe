import  PropTypes  from 'prop-types';
const Bookmarks = ({bookmark}) => {
    // console.log(bookmark)
    const {title} = bookmark;
    return (
        <div className="text-center bg-white  my-4 py-4">
            <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmarks;