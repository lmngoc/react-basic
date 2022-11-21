import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import avatar from '../../assets/images/IMG-1437.JPG';
import { connect } from 'react-redux';

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }
    handleDeleteUser = (user) => {
        console.log('check user delete', user);
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.createUserRedux();
    }
    render() {
        console.log('check prop from Home', this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hollo world from Home page</div>
                <div>
                    <img src={avatar} style={{ width: '100px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>{index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>X</span></div>
                            )

                        })}
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
// export default withRouter(Home);

export default connect(mapStateToProps, mapDispathToProps)(Color(Home));