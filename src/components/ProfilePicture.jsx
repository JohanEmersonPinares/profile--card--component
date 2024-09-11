
import profileImg from '../assets/image-profile.jpg';

const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <img src={profileImg} alt="Victor Crest" className="profile-picture" />
    </div>
  );
};

export default ProfilePicture;
