/**
 * ../routers.tsx
 */

import * as React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown } from "reactstrap";

export interface ProjectNavBarProps {
    projectName?: React.ReactNode | string;// 项目名称
}
export interface ProjextNavBarState {
    projectName?: React.ReactNode | string;// 项目名称
    isOpen?: boolean; // 是否处于移动端
}
export class ProjectNavBar extends React.Component<ProjectNavBarProps, ProjextNavBarState>{
    constructor(props: ProjectNavBarProps, state: ProjextNavBarState) {
        super(props);
        this.state = {
            projectName: this.props.projectName ? this.props.projectName : "React脚手架",
            isOpen: false
        };
    };
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={this.toggle.bind(this)} />
                <NavbarBrand href="/">{this.state.projectName}</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/test">测试页</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ags">AGS</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

}