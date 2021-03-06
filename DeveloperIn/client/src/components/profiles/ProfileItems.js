import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileItems = ({profile: {
  user: { _id, name, avatar },
  status, company, location, skills
}}) => {
  return (
    <div className="profile bg-light">
      <img className="round-img" src={avatar}/>
      <div>
      <h2>{name}</h2>
      <p>{status} {company && <span>at {company}</span>}</p>
      <p className="my-1">{location && <span>{location}</span>}</p>
      <Link className="btn btn-primary" to={`/profile/${_id}`}>View Profile</Link>
      </div>
      <ul>
      {skills.slice(0,4).map((skill, id) => (
        <li key={id} className="text-primary"><i className="fas fa-check"></i>{skill}</li>
      ))}
      </ul>
    </div>
  )
}

ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired,
}

// const mapStateToProps = state => ({
//   profile: state.profile,
// })
export default ProfileItems
