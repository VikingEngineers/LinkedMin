import React from 'react';
export default function Inbox() {

    return(
      <div>
        <h3>New Messages</h3>

    <ul class="messages">
      <li class="message message--unread">
          <a href="{% url 'message' message.id %}">
            <span class="message__author">message.name</span>
            <span class="message__subject">message.subject</span>
            <span class="message__date">message.created</span>
          </a>
      </li>
    </ul>
    </div>
    )  
}