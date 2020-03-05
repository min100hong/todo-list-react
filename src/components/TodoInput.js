import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
      const { item, handleChange, handleSubmit, isEdit }=this.props;
      return (
          <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-whitw">
                    <i className="fa fa-book"></i>
                  </div>
                </div>
                <input 
                  type="text" 
                  className="form-control text-capitalize" 
                  onChange={handleChange}
                  value={item}
                  placeholder="Add a Todo Item"
                />
              </div>
              <button 
                type="submit" 
                className={
                  isEdit 
                  ? "btn btn-block btn-success text-capitalize mt-3"
                  : "btn btn-block btn-primary text-capitalize mt-3" 
                }
              >
                {isEdit ? "edit item" : "add item"}
              </button>
            </form>
          </div>
      )
    }
}
