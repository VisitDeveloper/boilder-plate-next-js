import styled from "styled-components";
import { Button } from "antd";

// type ButtonType = "primary" | "link";
// export interface ButtonProps {
//   children?: React.ReactNode;
//   htmlType?: "button" | "submit" | "reset";
//   type?: ButtonType;
//   block?: boolean;
//   loading?: boolean;
//   disabled?: boolean;
//   color?: string;
//   fontSize?: string;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

const Wrapper = styled.div`
  display: contents;
  & .ant-btn-primary {
    background: blue;
    box-shadow: 0px 0px 12px rgba(28, 86, 225, 0.51);
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
  }
  & .ant-btn-link {
    box-shadow: none;
    background: transparent;
    color: #fff;
  }
`;
const StyledButton = styled(Button)`
  &[disabled] {
    background-color: green;
    border: none;
    box-shadow: none !important;
    color: #fff;
  }
  border-color: ;
  padding :0px 36px 0px 37px ;
  color: #fff;
  font-size: 12px;
`;

export const ButtonComponent = ({
  children,
  htmlType,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <StyledButton
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
        {...rest}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};