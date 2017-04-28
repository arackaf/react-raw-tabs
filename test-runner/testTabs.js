import React, {Component, Children, cloneElement} from 'react';
import {render} from 'react-dom';

import Tabs from '../src/tabs';

class RunIt extends Component {
    state = {controlledTabA: 'a'}
    setTabA = name => this.setState({controlledTabA: name});
    render() {
        return (
            <div style={{margin: '30px'}}>
                <Tabs defaultTab='b'>
                    {({TabLink, TabHeader, TabPane}) => (
                        <div>
                            <ul className='nav nav-tabs'>
                                <TabHeader tab='a' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='a'>Tab A</TabLink>
                                    </li>
                                 )} />
                                <TabHeader tab='b' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='b'>Tab B</TabLink>
                                    </li>
                                )} />
                                <TabHeader tab='c' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='c'>Tab C</TabLink>
                                    </li>
                                )} />
                            </ul>
                            <div className='tab-content'>
                                <TabPane tab='a' render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab A
                                    </div>
                                )} />
                                <TabPane tab='b'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab B
                                    </div>
                                )} />
                                <TabPane tab='c'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab C
                                    </div>
                                )} />
                            </div>
                        </div>
                    )}
                </Tabs>
                <br /><br />
                <Tabs tab={this.state.controlledTabA} onChangeTab={this.setTabA}>
                    {({TabLink, TabHeader, TabPane}) => (
                        <div>
                            <ul className='nav nav-tabs'>
                                <TabHeader tab='a' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='a'>Tab A</TabLink>
                                    </li>
                                 )} />
                                <TabHeader tab='b' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='b'>Tab B</TabLink>
                                    </li>
                                )} />
                                <TabHeader tab='c' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='c'>Tab C</TabLink>
                                    </li>
                                )} />
                            </ul>
                            <div className='tab-content'>
                                <TabPane tab='a'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab A
                                    </div>
                                )} />
                                <TabPane tab='b'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab B
                                    </div>
                                )} />
                                <TabPane tab='c'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab C
                                    </div>
                                )} />
                            </div>
                        </div>
                    )}
                </Tabs>

                <br /><br />Never change
                <Tabs tab={this.state.controlledTabA}>
                    {({TabLink, TabHeader, TabPane}) => (
                        <div>
                            <ul className='nav nav-tabs'>
                                <TabHeader tab='a' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='a'>Tab A</TabLink>
                                    </li>
                                 )} />
                                <TabHeader tab='b' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='b'>Tab B</TabLink>
                                    </li>
                                )} />
                                <TabHeader tab='c' render={({isActive}) => (
                                    <li className={isActive ? ' active ' : ''}>
                                        <TabLink tab='c'>Tab C</TabLink>
                                    </li>
                                )} />
                            </ul>
                            <div className='tab-content'>
                                <TabPane tab='a'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab A
                                    </div>
                                )} />
                                <TabPane tab='b'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab B
                                    </div>
                                )} />
                                <TabPane tab='c'render={({isActive}) => (
                                    <div className={'tab-pane ' + (isActive ? ' active in ' : '')}>
                                        This is tab C
                                    </div>
                                )} />
                            </div>
                        </div>
                    )}
                </Tabs>
            </div>
        );
    }
}

render(<RunIt />, document.getElementById('home'));


export default null;