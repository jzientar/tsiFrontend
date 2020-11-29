import React from "react";

export const HeaderHtml = () => {
  return (
    <header className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto py-2">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg text-center text-lg-left">
                    <h1 className="font-weight-light d-inline">
                      <span className="text-dark">CentroParts Inbox</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHtml;
