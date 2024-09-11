

const ProfileDetails = () => {
  return (
    <div className="profile-details-container">
      <h2 className="name">Victor Crest <span className="age">26</span></h2>
      <p className="location">London</p>
      <div className="stats">
        <div>
          <span className="stat-number">80K</span>
          <span className="stat-label">Followers</span>
        </div>
        <div >
          <span className="stat-number">803K</span>
          <span className="stat-label">Likes</span>
        </div>
        <div>
          <span className="stat-number">1.4K</span>
          <span className="stat-label">Photos</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
