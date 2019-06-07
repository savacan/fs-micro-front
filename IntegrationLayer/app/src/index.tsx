import * as React from 'react';
import { render } from 'react-dom';


export interface HogeState {
    hoge: string
}

class Main extends React.Component<any, HogeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hoge: 'hogeeeeeee'
        }
    }
    componentDidMount() {
        console.log("main is mont");
    }

    render() {
        const { hoge } = this.state
        return (
            <div>
                {hoge}
            </div>
        )
    }
}


render(<Main />, document.getElementById('root'));