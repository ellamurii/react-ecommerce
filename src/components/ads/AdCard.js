const AdCard = ({ img }) => {
  return (
    <div className="ad-card">
      <p className="ad">Ad</p>
      <div class="img">
        <img src={img} alt="ad" />
      </div>
      <p>A word from our sponsors</p>
    </div>
  );
};

export default AdCard;
