import React, {Component, Children, cloneElement} from 'react';
import {render} from 'react-dom';

export default class Tabs extends Component {
    state = {currentTab: this.props.defaultTab};
    tabSelect = name => {
        this.isControlled ? this.props.onChangeTab && this.props.onChangeTab(name) : this.setState(() => ({currentTab: name}));
    }
    isControlled = (typeof this.props.tab !== 'undefined') || (typeof this.props.onChangeTab !== 'undefined');
    get currentTab() { return this.isControlled ? this.props.tab : this.state.currentTab };
    componentWillMount() {
        let self = this;

        class TabLink extends Component {
            onClick = evt => {
                evt.preventDefault();
                if (this.props.onClick){
                    this.props.onClick();
                }
                self.tabSelect(this.props.tab);
            }
            render() {
                let {children, onClick, href, tab, ...rest} = this.props;
                return (
                    <a href={href || `#${tab}`} onClick={this.onClick}>{children}</a>
                );
            }
        }
        class TabHeader extends Component {
            render() {
                let {render, children: child} = this.props,
                    propsToPass = {isActive: self.currentTab == this.props.tab};

                return render
                    ? render(propsToPass)
                    : cloneElement(Children.only(child), propsToPass);
            }
        }
        class TabPane extends Component {
            render() {
                let {render, children: child} = this.props,
                    propsToPass = {isActive: self.currentTab == this.props.tab};

                return (self.currentTab == this.props.tab) || this.props.renderInActiveTabs
                    ? render 
                        ? render({isActive: self.currentTab == this.props.tab})
                        : cloneElement(Children.only(child), propsToPass)
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