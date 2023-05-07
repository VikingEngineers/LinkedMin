import React from 'react';
export default function Inbox() {

    return(
      <div class="addprcontainer">
        <h3>New Messages</h3>
          <a class="inboxtext" href="{% url 'message' message.id %}">
            <span class="spantext">message.name     </span>
            <span class="spantext">message.subject   </span>
            <span class="spantext">message.created    </span>
          </a>
    </div>
    )  
}