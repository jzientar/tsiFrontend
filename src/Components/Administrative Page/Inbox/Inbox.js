import React, { Component } from "react";
import { InboxHtml } from "./InboxHtml";
import ModalCompose from "./ModalCompose";
import ModalMessage from "./ModalMessage";
import axios from "axios";
import messages from "./messages.json";


export class Inbox extends Component {
  constructor(props) {
    super(props);
    this.markRead = this.markRead.bind(this);
    this.doShow = this.doShow.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.toggleMark = this.toggleMark.bind(this);
    this.toggleMarkAll = this.toggleMarkAll.bind(this);
    this.deleteMarked = this.deleteMarked.bind(this);
    this.refreshMessages = this.refreshMessages.bind(this);
    this.deleteMessages = this.deleteMessages.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.ModalMessage = React.createRef();
    this.ModalCompose = React.createRef();
    this.state = {
      items: [],
      messages: [],
      selected: {},
      deleted: [],
      isLoaded: false
    };
  }
  
  componentDidMount() {

    fetch('https://api.centroparts-bolivia.com/api/Message')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                messages: json,
                selected: json,
                isLoaded: true, 
            })
        }).catch((err) => {
            console.log(err);
        });

}


  markRead(idx) {
    /* mark this message as read */
    let messages = [...this.state.messages];
    messages[idx].read = true;
    this.setState({ messages });
  }

  doShow(idx) {
    this.markRead(idx);
    this.setState({
      selected: messages[idx]
    });
    /* open message in modal */
    this.ModalMessage.current.show();
  }

  // doCompose() {
  //   /* open compose modal */
  //   this.ModalCompose.current.show();
  // }

  toggleMark(idx) {
    let messages = [...this.state.messages];
    messages[idx].marked = messages[idx].marked ? 0 : 1;
    this.setState({ messages });
  }

  doDelete(idx) {
    let messages = [...this.state.messages];
    let deleted = [...this.state.deleted];
    /* append it to deleted */
    deleted.push(messages[idx]);
    /* remove the message at idx */
    messages.splice(idx, 1);
    this.setState({ messages, deleted });
  }

  toggleMarkAll() {
    let messages = [...this.state.messages];
    messages.map((v, k) => {
      return (v.marked = v.marked ? 0 : 1);
    });
    this.setState({ messages });
  }

  deleteMarked() {
    var self = this;
    let messages = [...this.state.messages];
    var tbd = [];
    for (var k = 0; k < messages.length; k++) {
      if (messages[k].marked === 1) {
        tbd.push(k);
      }
    }

    if (tbd.length > 0) {
      self.deleteMessages(tbd);
    }
  }

  refreshMessages() {
    let items = [...this.state.items];
    this.setState({ messages: items });
  }

  deleteMessages(arr) {

    let messages = [...this.state.messages];
    let deleted = [...this.state.deleted];
    for (var i = arr.length - 1; i >= 0; i--) {
      deleted.push(messages[i]);
      messages.splice(arr[i], 1);
    }
    this.setState({ messages, deleted });
  }

render() {

  const { isLoaded, items } = this.state;

  if (!isLoaded)
      return <div>Loading...</div>;

  return (
      <div className="App">
        <InboxHtml parent={this} />
        <ModalCompose sendTo={this.state.selected.email} />
        <ModalMessage ref={this.ModalMessage} message={this.state.selected} />
      </div>
  );

}

}

export default Inbox;