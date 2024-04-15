import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "react-loader-spinner";
import * as Styles from "./SignIn.style";
import LogoImage from "../../assets/svg/serverpoint.svg";
import Alert from "../common/alert";
import Checkbox from "../common/checkbox/Checkbox";
import Input from "../common/input";
import LanguageDropdown from "../language-dropdown/LanguageDropdown";

const SignIn = ({ handleSubmit, loginResult, severity, title ="ServerPoint's portal", loginIsLoading}) => {
  const { t, i18n } = useTranslation();
  const obj = localStorage.getItem("remember");
  let email = "";

  if (obj) {
    const { email: e } = JSON.parse(obj);
    email = e;
  }

  let defaultLang = i18n.language === "en-US" ? "en" : i18n.language;
  // let defaultLang = i18n.language === 'en-US' ? 'en' : "EN English";
  console.log("defaultLang", defaultLang);
  const [language, setLanguage] = useState(defaultLang);
  const [userName, setUserName] = useState(email);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isRememberPassword, setIsRememberPassword] = useState(email && true);

  const handleLanguage = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <>
      <Styles.BgLogin>
        <Styles.LoginContainer>
          <Styles.Logo>
            <img src={LogoImage} alt="serverpoint" width="100%" />
          </Styles.Logo>
          <Styles.LoginBox>
            <Alert
              severity={severity === "error" ? "error" : "info"}
              text={t(loginResult)}
              open={open}
              handleClose={() => setOpen(false)}
            />
            <Styles.LoginForm>
              <Styles.Heading>{t(`${title}`)}</Styles.Heading>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name={"name"}
                  value={userName}
                  placeholder="Username or email address"
                  onKeyPress={(e) => {
                    e.target.keyCode === 13 && e.preventDefault();
                  }}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  isFormIk={false}
                />
                <Input
                  type="password"
                  name={"password"}
                  value={password}
                  placeholder="Password"
                  onKeyPress={(e) => {
                    e.target.keyCode === 13 && e.preventDefault();
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  isFormIk={false}
                />
                <Styles.SubmitForm>
                  <Checkbox
                    id="check"
                    title="Remember my username"
                    value={isRememberPassword}
                    setValue={setIsRememberPassword}
                  />
                </Styles.SubmitForm>
                <Styles.Button type="submit">
                  loginIsLoading
                  {loginIsLoading ? (
                    <Loader
                      style={{ display: "inline", marginRight: "5px" }}
                      type="ThreeDots"
                      color="#fff"
                      height={24}
                      width={24}
                      radius={4}
                    />
                  ) : null}
                  <span>
                    <span style={{ fontWeight: "bolder" }}>Sign In</span>
                  </span>
                </Styles.Button>
              </form>
              <Styles.Bottom>
                <LanguageDropdown
                  language={language}
                  handleLanguage={(e) => handleLanguage(e)}
                />
              </Styles.Bottom>
            </Styles.LoginForm>
          </Styles.LoginBox>
        </Styles.LoginContainer>
      </Styles.BgLogin>
    </>
  );
};

export default SignIn;
