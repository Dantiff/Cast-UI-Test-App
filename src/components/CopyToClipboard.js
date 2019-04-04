import React, { Component } from 'react';
import { CopyToClipboard, Themes } from '@tkxs/cast-ui';
import Icon from 'react-icons-kit';
import { ic_content_copy as ICopy } from 'react-icons-kit/md/ic_content_copy';
import { ic_check as icCheck } from 'react-icons-kit/md/ic_check';

const SecondaryCopyContent = () => <Icon size={16} icon={ICopy} />;
const SecondaryCopySuccessContent = () => <Icon size={16} icon={icCheck} />;

export class TestCopyToClipboard extends Component {
  render() {
    return (
      <header className="">
        <div>
          <CopyToClipboard
            copyContent={`
  <CopyToClipboard
    copyContent='Some text that is usually copied to clipboard.'
    copyContainerClass='copy-container'
    background='lightBackground'
    includeCopyButton={true}
    copyButtonContent='copy'
    copyButtonClass='copy-button'
  />
          `}
            copyContainerClass="copy-container"
            background="lightBackground"
            includeCopyButton
            copyButtonContent="copy"
            copyButtonClass="copy-button"
            fullWidth
            theme={{ ...Themes.defaultTheme }}
          />
          <br />
          <CopyToClipboard
            copyContent="CBA6697-67895"
            copyButtonContent={<SecondaryCopyContent />}
            copyButtonSuccessContent={<SecondaryCopySuccessContent />}
            fullWidth={false}
            theme={{ ...Themes.defaultTheme }}
          />
        </div>
      </header>
    );
  }
}

export default TestCopyToClipboard;
