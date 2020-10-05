import React, { useState } from "react";
import Btn from "../atoms/Btn";
import ControlledInput from "../atoms/ControlledInput";
import PlainLink from "../atoms/PlainLink";
import { useDispatch, useSelector } from "react-redux";
import { selectSignUpPending } from "../../store/slices/account/selectors";
import { signUpRequest } from "../../store/slices/account/actions";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpPending = useSelector(selectSignUpPending);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch(signUpRequest({ name, email, password }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {t("views.signUp.nameLabel")}
          </label>
          <ControlledInput
            defaultValue={name}
            onChange={setName}
            placeholder={t("views.signUp.namePlaceholder")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {t("views.signUp.emailLabel")}
          </label>
          <ControlledInput
            defaultValue={email}
            onChange={setEmail}
            type="email"
            placeholder={t("views.signUp.emailPlaceholder")}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {t("views.signUp.passwordLabel")}
          </label>
          <ControlledInput
            defaultValue={password}
            onChange={setPassword}
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <Btn isDisabled={signUpPending} type="submit">
            {signUpPending
              ? t("shared.loadingState")
              : t("views.signUp.submitButton")}
          </Btn>
        </div>
      </form>
      <p className="text-center text-gray-500 text-sm">
        {t("views.signUp.existingAccountQuestion")}&nbsp;
        <PlainLink to="/login">
          {t("views.signUp.existingAccountLink")}
        </PlainLink>
        .
      </p>
    </>
  );
};

export default SignUp;
