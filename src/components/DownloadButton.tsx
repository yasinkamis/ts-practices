import { FC } from "react"
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { flexCenter, spaces } from '../utils/constant';
import styled from 'styled-components';

const DownloadButton: FC = () => {
    const handleDownload = () => {
        // indirme işlemi burada yapılabilir
    };

    return (
        <StyledButton icon={<FontAwesomeIcon icon={faDownload} />} onClick={handleDownload}>
            Download
        </StyledButton>
    );
};

export default DownloadButton;

const StyledButton = styled(Button)`
  ${flexCenter()};
  gap: ${spaces.medium};
  width: 300px;
`;
