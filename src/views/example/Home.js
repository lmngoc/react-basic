import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }
    render() {
        console.log('check prop from Home', this.props);
        return (
            <div>Hollo world from Home page</div>
        )
    }
}

// export default withRouter(Home);

export default Color(Home);