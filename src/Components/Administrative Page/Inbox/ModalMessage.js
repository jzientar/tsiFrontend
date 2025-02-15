import React from "react";
import jquery from "jquery";
import "bootstrap";
import "popper.js";

export class ModalMessage extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  show() {
    jquery(this.refs.messageModal).modal("show");
  }

  render() {
    return (
      <div
        id="messageModal"
        className="modal fade mt-0 mt-md-5"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        ref="messageModal"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <small className="text-uppercase text-muted">Subject</small>
                <h4 className="modal-title">{this.props.message.subject}</h4>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-8">
                  <small className="text-uppercase text-muted">From</small>
                  <h4>
                    <a href="'mailto:'+selected.email">
                      {this.props.message.fullName}
                    </a>
                  </h4>
                </div>
                <div className="col-sm-8">
                  <small className="text-uppercase text-muted">Phone Number</small>
                  <h4>
                      {this.props.message.phoneNumber}
                  </h4>
                </div>
                <div className="col-sm-4">
                  <small className="text-uppercase text-muted">Sent</small>
                  <h6>{this.props.message.date}</h6>
                </div>
                <div className="col-sm-12">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: this.props.message.message
                    }}
                  />
                </div>
              </div>
              <p className="my-3" />
              <button
                className="btn btn-primary float-right ml-2"
                data-dismiss="modal"
                aria-hidden="true"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalMessage;