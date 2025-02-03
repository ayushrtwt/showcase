import profile from '../assets/image.jpeg';

const Header = () => {
  return (
    <div className="flex justify-center px-4 pt-4">
      <div className="flex justify-between items-center w-full max-w-3xl">
        {/* Left Section: Name */}
        <p className="font-medium text-xl md:text-2xl">Ayush Rawat</p>

        {/* Right Section: Profile Image */}
        <img
          src={profile}
          alt="Logo"
          className="h-16 w-16 md:h-20 md:w-20 rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
  