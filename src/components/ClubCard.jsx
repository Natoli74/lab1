const ClubCard = ({ club, onLearnMore }) => {
  // always use the student organizations page for Contact
  const contactHref =
    "https://www.mnstate.edu/student-life/student-activities/organizations";

  return (
    <div className="club-card" tabIndex={0} aria-label={`${club.name} card`}>
      <div className={`club-card-accent ${club.colorClass}`} />
      <div className="club-card-content">
        <div className="club-card-header">
          <div className={`club-icon ${club.iconBgClass}`}>{club.icon}</div>
          <h3 className="club-name">{club.name}</h3>
        </div>

        <p className="club-description">{club.description}</p>

        <div className="club-details">
          <div className="club-detail">
            <span className="detail-label">Focus:</span>
            <span className="detail-badge">{club.focus}</span>
          </div>
          <div className="club-detail">
            <span className="detail-label">Meeting:</span>
            <span className="detail-value">{club.meeting}</span>
          </div>
        </div>

        <div className="club-buttons">
          <button
            className="btn btn-primary"
            onClick={onLearnMore}
            aria-label={`Learn more about ${club.name}`}
          >
            <span className="btn-icon">🔗</span>
            Learn More
          </button>
          <a
            className="btn btn-secondary"
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contact ${club.name}`}
          >
            <span className="btn-icon">📧</span>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
