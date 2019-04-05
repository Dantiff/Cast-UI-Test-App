import React, { Component } from 'react';
import {
  SideNavbar,
  SideNav,
  SideNavItem,
  SideNavItemIcon,
  SideNavItemText,
  SideNavToggle,
} from '@tkxs/cast-ui/lib-esm';
import Icon from 'react-icons-kit';
import { socialBitcoinOutline } from 'react-icons-kit/ionicons/socialBitcoinOutline';
import { socialAndroidOutline } from 'react-icons-kit/ionicons/socialAndroidOutline';
import { iosHomeOutline } from 'react-icons-kit/ionicons/iosHomeOutline';
import { iosPaperOutline } from 'react-icons-kit/ionicons/iosPaperOutline';
import { iosWorldOutline } from 'react-icons-kit/ionicons/iosWorldOutline';

export class TestSidenav extends Component {
  render() {
    return (
      <header className="">
        <div style={{ height: '600px', position: 'relative' }}>
          <SideNavbar
            isOpen={true}
            background="lightBackground"
            isSecondaryNavbarOpen={true}
          >
            <SideNavToggle />
            <SideNav top>
              <SideNavItem path="/home">
                <SideNavItemIcon>
                  <Icon icon={iosHomeOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Home</SideNavItemText>
              </SideNavItem>
              <SideNavItem path="/documents" activeSideNavItem={true}>
                <SideNavItemIcon>
                  <Icon icon={iosPaperOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Documents</SideNavItemText>
                <SideNav secondary>
                  <SideNavItem path="/documents/home-documents">
                    <div style={{ padding: '12px 0 12px 24px' }}>
                      Home Documents
                    </div>
                  </SideNavItem>
                  <SideNavItem path="/documents/office-documents">
                    <div style={{ padding: '12px 0 12px 24px' }}>
                      Office Documents
                    </div>
                  </SideNavItem>
                </SideNav>
              </SideNavItem>
              <SideNavItem path="/web" activeSideNavItem={true}>
                <SideNavItemIcon>
                  <Icon icon={iosWorldOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>The Web</SideNavItemText>
                <SideNav top secondary>
                  <SideNavItem path="/web/www">
                    <div style={{ padding: '12px 0 12px 24px' }}>
                      World Wide Web
                    </div>
                  </SideNavItem>
                  <SideNavItem path="/web/dark-web">
                    <div style={{ padding: '12px 0 12px 24px' }}>
                      The Dark Web
                    </div>
                  </SideNavItem>
                </SideNav>
              </SideNavItem>
              <SideNavItem path="/currencies" disabled>
                <SideNavItemIcon>
                  <Icon icon={socialBitcoinOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Currencies</SideNavItemText>
              </SideNavItem>
            </SideNav>
            <SideNav center>
              <SideNavItem path="/technology">
                <SideNavItemIcon>
                  <Icon icon={socialAndroidOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Technology</SideNavItemText>
              </SideNavItem>
              <SideNavItem path="/currencies" disabled>
                <SideNavItemIcon>
                  <Icon icon={socialBitcoinOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Currencies</SideNavItemText>
              </SideNavItem>
            </SideNav>
            <SideNav bottom>
              <SideNavItem path="/documents">
                <SideNavItemIcon>
                  <Icon icon={iosPaperOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Documents</SideNavItemText>
              </SideNavItem>
              <SideNavItem path="/home">
                <SideNavItemIcon>
                  <Icon icon={iosHomeOutline} size={24} />
                </SideNavItemIcon>
                <SideNavItemText>Home</SideNavItemText>
              </SideNavItem>
            </SideNav>
          </SideNavbar>
        </div>
        <br />
      </header>
    );
  }
}

export default TestSidenav;
