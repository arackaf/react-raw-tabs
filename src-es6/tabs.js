import React, {Component, Children, cloneElement} from 'react';
import {render} from 'react-dom';

export default class Tabs extends Component {
    state = {currentTab: this.props.defaultTab};
    tabSelect = name => {
        this.isControlled ? this.props.onChangeTab(name) : this.setState(() => ({currentTab: name}));
    }
    get currentTab() { return this.isControlled ? this.props.tab : this.state.currentTab };
    componentWillMount() {
        this.isControlled = (typeof this.value !== 'undefined') || (typeof this.onChangeTab !== 'undefined');
        let self = this;

        class TabLink extends Component {
            onClick = () => {
                if (this.props.onClick){
                    this.props.onClick();
                }
                self.tabSelect(this.props.tab);
            }
            render() {
                let {children, onClick, tab, ...rest} = this.props;
                return (
                    <a onClick={this.onClick}>{children}</a>
                );
            }
        }
        class TabHeader extends Component {
            render() {
                let {children: renderTabHeader} = this.props;
                return renderTabHeader({isActive: self.currentTab == this.props.tab});
            }
        }
        class TabPane extends Component {
            render() {
                let {children: renderTabPane} = this.props;
                return (self.currentTab == this.props.tab) || this.props.renderInActiveTabs
                    ? renderTabPane({isActive: self.currentTab == this.props.tab})
                    : null;
            }
        }

        this.TabLink = TabLink;
        this.TabHeader = TabHeader;
        this.TabPane = TabPane;
    }
    render() {
        let {children: renderTabs} = this.props,
            {TabLink, TabHeader, TabPane} = this;

        return renderTabs({TabLink, TabHeader, TabPane});
    }
}