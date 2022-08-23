import React, {Component} from "react";

const data = [
    {
        id: 1,
        title: 'Wiadomość nr 1',
        body: 'Zawartość wiadomości nr 1 ...'
    }, {
        id: 2,
        title: 'Wiadomość nr 2',
        body: 'Zawartość wiadomości nr 2 ...'
    }
];

class MessageDisplay extends Component {

    messageInterval = '';
    mockDatabaseInterval = '';

    state = {
        comments: [...data]
    };

    getData = () => {
        if (this.state.comments.length !== data.length) {
            this.setState({
                comments: [...data]
            });
        }
    }

    componentDidMount() {
        this.mockDatabaseInterval = setInterval(() => {
            const index = data.length + 1;
            data.push({
                id: index,
                title: `Wiadomość nr ${index}`,
                body: `Zawartość wiadomości nr ${index} ...`
            })
        }, 3000);
        

        this.messageInterval = setInterval(() => {
            this.getData();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.messageInterval);
        clearInterval(this.mockDatabaseInterval);
    }

    render() { 
        const comments = this.state.comments.map(comment => (
            <div key={comment.id}>
                <h4>{comment.title}</h4>
                <div>{comment.body}</div>
            </div>
        ))
        return (
            <>
                {comments}
            </>
        );
    };
}
 
export default MessageDisplay;