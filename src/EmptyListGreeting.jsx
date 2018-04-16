import React from 'react';
import { TodoItems } from './TodoItems';

export class EmptyListGreeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='alert alert-info'>
                <p><strong>No current todos. Perhaps your list is finished!?!</strong></p>
                <p>Add a new todo on the left.</p>
            </div>
        );
    }
}
