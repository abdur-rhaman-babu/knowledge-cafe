import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='md:flex justify-between items-center px-28 py-2 shadow-md'>
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;