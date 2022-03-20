import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../button";
import { StyledNavbarContainer } from "./styled";

const Navbar = () => {
  const router = useRouter();
  return (
    <StyledNavbarContainer>
      <div className="container">
        <img className="logo" src="/images/logo.png" />

        <div className="content">
          <ul className="ul">
            <li className="li">
              <Link href="/">
                <a className="link">Home</a>
              </Link>
            </li>
            <li className="li">
              <Link href="/">
                <a className="link">Page 2</a>
              </Link>
            </li>
            <li className="li">
              <Link href="/">
                <a className="link">Page 3</a>
              </Link>
            </li>
            <li className="li">
              <Link href="/">
                <a className="link">Page 4</a>
              </Link>
            </li>
          </ul>
          <div className="loginButtons">
            <Button
              as="a"
              backgroundcolor="white"
              border="1px solid #2b4ec2"
              color="#2b4ec2"
              padding="8px 30px"
              borderradius="4px"
              width="120px"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
            <Button
              as="a"
              width="120px"
              onClick={() => {
                router.push("/register");
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </StyledNavbarContainer>
  );
};

export default Navbar;
