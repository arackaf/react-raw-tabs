import React, { Component, Children, cloneElement } from 'react';
import { render } from 'react-dom';

var Tabs = function (_Component) {
    babelHelpers.inherits(Tabs, _Component);

    function Tabs() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { currentTab: _this.props.defaultTab }, _this.tabSelect = function (name) {
            _this.isControlled ? _this.props.onChangeTab(name) : _this.setState(function () {
                return { currentTab: name };
            });
        }, _this.isControlled = typeof _this.props.tab !== 'undefined' || typeof _this.props.onChangeTab !== 'undefined', _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Tabs, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;

            var TabLink = function (_Component2) {
                babelHelpers.inherits(TabLink, _Component2);

                function TabLink() {
                    var _ref2;

                    var _temp2, _this2, _ret2;

                    babelHelpers.classCallCheck(this, TabLink);

                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    return _ret2 = (_temp2 = (_this2 = babelHelpers.possibleConstructorReturn(this, (_ref2 = TabLink.__proto__ || Object.getPrototypeOf(TabLink)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onClick = function (evt) {
                        evt.preventDefault();
                        if (_this2.props.onClick) {
                            _this2.props.onClick();
                        }
                        self.tabSelect(_this2.props.tab);
                    }, _temp2), babelHelpers.possibleConstructorReturn(_this2, _ret2);
                }

                babelHelpers.createClass(TabLink, [{
                    key: 'render',
                    value: function render() {
                        var _props = this.props,
                            children = _props.children,
                            onClick = _props.onClick,
                            href = _props.href,
                            tab = _props.tab,
                            rest = babelHelpers.objectWithoutProperties(_props, ['children', 'onClick', 'href', 'tab']);

                        return React.createElement(
                            'a',
                            { href: href || '#' + tab, onClick: this.onClick },
                            children
                        );
                    }
                }]);
                return TabLink;
            }(Component);

            var TabHeader = function (_Component3) {
                babelHelpers.inherits(TabHeader, _Component3);

                function TabHeader() {
                    babelHelpers.classCallCheck(this, TabHeader);
                    return babelHelpers.possibleConstructorReturn(this, (TabHeader.__proto__ || Object.getPrototypeOf(TabHeader)).apply(this, arguments));
                }

                babelHelpers.createClass(TabHeader, [{
                    key: 'render',
                    value: function render() {
                        var _props2 = this.props,
                            render = _props2.render,
                            child = _props2.children,
                            propsToPass = { isActive: self.currentTab == this.props.tab };


                        return render ? render(propsToPass) : cloneElement(Children.only(child), propsToPass);
                    }
                }]);
                return TabHeader;
            }(Component);

            var TabPane = function (_Component4) {
                babelHelpers.inherits(TabPane, _Component4);

                function TabPane() {
                    babelHelpers.classCallCheck(this, TabPane);
                    return babelHelpers.possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
                }

                babelHelpers.createClass(TabPane, [{
                    key: 'render',
                    value: function render() {
                        var _props3 = this.props,
                            render = _props3.render,
                            child = _props3.children,
                            propsToPass = { isActive: self.currentTab == this.props.tab };


                        return self.currentTab == this.props.tab || this.props.renderInActiveTabs ? render ? render({ isActive: self.currentTab == this.props.tab }) : cloneElement(Children.only(child), propsToPass) : null;
                    }
                }]);
                return TabPane;
            }(Component);

            this.TabLink = TabLink;
            this.TabHeader = TabHeader;
            this.TabPane = TabPane;
        }
    }, {
        key: 'render',
        value: function render() {
            var renderTabs = this.props.children,
                TabLink = this.TabLink,
                TabHeader = this.TabHeader,
                TabPane = this.TabPane;


            return renderTabs({ TabLink: TabLink, TabHeader: TabHeader, TabPane: TabPane });
        }
    }, {
        key: 'currentTab',
        get: function get() {
            return this.isControlled ? this.props.tab : this.state.currentTab;
        }
    }]);
    return Tabs;
}(Component);

export default Tabs;