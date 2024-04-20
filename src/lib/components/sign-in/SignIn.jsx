import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "react-loader-spinner";
import * as Styles from "./SignIn.style";
import LogoImage from "../../assets/svg/serverpoint.svg";
import Alert from "../common/alert";
import Checkbox from "../common/checkbox/Checkbox";
import Input from "../common/input";
import LanguageDropdown from "../language-dropdown/LanguageDropdown";

const SignIn = (props) => {
  const {
    handleSubmit,
    loginResult,
    severity,
    title = "ServerPoint's portal",
    loginIsLoading = false,
    open,
    setOpen,
    mode,
  } = props;
  console.log("loginResult", loginResult)
  console.log("severity", severity)
  console.log("mode", mode)
  console.log("open", open)
  const { t, i18n } = useTranslation();
  const isAdmin = title?.includes("Admin")
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
  const [isRememberPassword, setIsRememberPassword] = useState(email && true);

  const handleLanguage = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
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
                <div>
                  <Input
                    type="text"
                    name={'name'}
                    value={userName}
                    placeholder={t('signin.string2')}
                    onKeyPress={(e) => {
                      e.target.keyCode === 13 && e.preventDefault();
                    }}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    isFormIk={false}
                    autocomplete="username"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name={'password'}
                    value={password}
                    placeholder={t('signin.string3')}
                    onKeyPress={(e) => {
                      e.target.keyCode === 13 && e.preventDefault();
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    isFormIk={false}
                    autocomplete="current-password"
                  />
                </div>
                <div>
                  <Styles.SubmitForm>
                    <Styles.Remember>
                      <Checkbox
                        id="check"
                        title="signin.string4"
                        value={isRememberPassword}
                        setValue={setIsRememberPassword}
                        remember={isRememberPassword}
                      />
                    </Styles.Remember>
                    <Styles.Forgot>
                      <a href="/forgot-password">{t('signin.string5')}</a>
                    </Styles.Forgot>
                  </Styles.SubmitForm>
                  <Styles.LoginButton>
                    <Styles.Button>
                      {loginIsLoading  ? (
                        <Loader
                          style={{ display: 'inline' }}
                          type="ThreeDots"
                          color="#fff"
                          height={24}
                          width={24}
                          radius={4}
                        />
                      ) : null}
                      <span>
                        <span style={{ fontWeight: 'bolder' }}> {t('signin.string6')}</span>
                      </span>
                    </Styles.Button>
                  </Styles.LoginButton>
                </div>
                <Styles.Bottom>
                  <LanguageDropdown language={language} handleLanguage={(e) => handleLanguage(e)} />
                  <Styles.SignUp>
                    <a href="/signup">{t('signin.string7')}</a>
                  </Styles.SignUp>
                </Styles.Bottom>
              </form>
            </Styles.LoginForm>
        </Styles.LoginBox>
      </Styles.LoginContainer>
    </Styles.BgLogin>
  );
};

export default SignIn;
