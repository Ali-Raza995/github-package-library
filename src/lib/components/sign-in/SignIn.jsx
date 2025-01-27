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
    userName,
    setUserName,
    password,
    setPassword,
    isRememberPassword,
    setIsRememberPassword,
    language,
    setLanguage
  } = props;
  console.log("loginResult", loginResult)
  console.log("severity", severity)
  console.log("mode", mode)
  console.log("open", open)
  const { t, i18n } = useTranslation();
  const isAdmin = title?.includes("Admin")
  const obj = localStorage.getItem("remember");
  let email = "lvp11316";

  if (obj) {
    const { email: e } = JSON.parse(obj);
    email = e;
  }



  const handleLanguage = (value) => {
    setLanguage(value);
    i18n?.changeLanguage(value);
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
              <Styles.SubmitForm
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Checkbox
                  id="check"
                  title="Remember my username"
                  value={isRememberPassword}
                  setValue={setIsRememberPassword}
                />
                {!isAdmin && (
                  <Styles.Forgot>
                    <a href="/#/forgot-password">{t("Forgot Password")}</a>
                  </Styles.Forgot>
                )}
              </Styles.SubmitForm>
              <Styles.Button type="submit">
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
                  <span style={{ fontWeight: "bolder" }}>Log In</span>
                </span>
              </Styles.Button>
            </form>
            <Styles.Bottom
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <LanguageDropdown
                language={language}
                handleLanguage={(e) => handleLanguage(e)}
              />
              {!isAdmin && (
                <Styles.SignUp>
                  <a href="/#/signup">{t("Sign up free")}</a>
                </Styles.SignUp>
              )}
            </Styles.Bottom>
          </Styles.LoginForm>
        </Styles.LoginBox>
      </Styles.LoginContainer>
    </Styles.BgLogin>
  );
};

export default SignIn;
