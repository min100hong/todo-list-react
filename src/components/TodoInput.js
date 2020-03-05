import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
              <form>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-whitw">
                      <i className="fa fa-book"></i>
                    </div>
                  </div>
                  <input type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-block btn-primary text-capitalize mt-3">add item</button>
              </form>
            </div>
        )
    }
}
