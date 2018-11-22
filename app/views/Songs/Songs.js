import React from 'react';

class Songs extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            url: "https://baike.baidu.com/item/",
            name: props.match.params.name
        };
    }

    render() {
        const {name, url} = this.state;

        return (
            <div className="songs">
                前往 <a href={url+name}>{name}</a>
            </div>
        );
    }
}

export default Songs;
