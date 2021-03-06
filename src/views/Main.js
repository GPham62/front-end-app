import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import HomeBoard from '../components/HomeBoard'
import {UserContext} from "../contexts/User";
import Create from '../components/Create';
import Detail from '../components/Detail';
import UserDetail from '../components/UserDetail';
import CreateCourse from "../components/CreateCourse";
import Courses from "../components/Courses";
import CourseDetail from '../components/CourseDetail';

class Main extends Component {

    render() {
        return (
            <UserContext.Consumer>
            {
              ({user}) => (
                 
                    <BrowserRouter>
                        <BaseLayout user={user}>
                            <Switch>

                                <Route exact path = "/dashboard" render={props => {
                                    return <HomeBoard user={user}  {...props}/>
                                }}/>

                                <Route exact path="/create" render={props => {
                                    return <Create user={user} {...props} />
                                }}/>

                                <Route exact path="/detail" render={props => {
                                    return <Detail user={user} {...props} />
                                }}/>

                                <Route exact path="/detail/:userid" render={props => {
                                    return <UserDetail user={user} {...props} />
                                }}/>

                                <Route exact path="/add-course" render={props => {
                                    return <CreateCourse user={user} {...props} />
                                }}/>

                                <Route exact path="/course-detail" render={props => {
                                    return <Courses user={user} {...props} />
                                }}/>
                                <Route exact path="/course-detail/:courseid" render={props => {
                                    return <CourseDetail user={user} {...props} />
                                }}/>
                            </Switch>
                        </BaseLayout>
                    </BrowserRouter>
                )
            }
             </UserContext.Consumer>
            
        );
    }
}

export default Main;
