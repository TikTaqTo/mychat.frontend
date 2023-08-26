import React from "react";
import PropTypes from "prop-types";
import './Message.scss';
import formatDistanceToNow from "date-fns/formatDistanceToNow/index";
import ruLocale from 'date-fns/locale/ru';


const Message = ({avatar, user, text, date}) => (
  <div className="message">
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullName}`} />
    </div>
    <div className="message__content">
      <div className="message__bubble">
        <p className="message__text">{text}</p>
      </div>
      <span className="message__date">{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</span>
    </div>
  </div>
);



Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date)
};

export default Message;
