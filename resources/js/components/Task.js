import React from 'react';
import ReactDOM from 'react-dom';

function TaskList() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-12 ">
                <div className="card">
                    <div className='card-header'>
                        <h2>Task List</h2>
                    </div>

                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskList;

// DOM element
if (document.getElementById('task')) {
    ReactDOM.render(<TaskList/>, document.getElementById('task'));
}

