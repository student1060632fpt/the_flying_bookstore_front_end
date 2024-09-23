"use client";

import { FormProvider, useForm } from "react-hook-form";
import InfoRent from "../../../components/checkout/InfoRent";
import { IFormCheckout } from "../../../types/form";
import { useEffect } from "react";
import { useAuthStore } from "../../../hooks/user";
import dayjs from "dayjs";
import { getProfile, onSubmitProfile } from "../../../api/profile";
import { useStoreAlert } from "../../../hooks/alert";

const UserProfilePage = () => {
  const methods = useForm<IFormCheckout>();
  const { profile, token, setToken } = useAuthStore();
  const { callAlert } = useStoreAlert();
  const { reset, handleSubmit } = methods;

  useEffect(() => {
    const defaultValues: IFormCheckout = {
      lastName: profile?.lastName || "",
      firstName: profile?.firstName || "",
      email: profile?.email || "",
      phoneNumber: profile?.phoneNumber || "",
      address: profile?.address || "",
      birthDate: profile?.birthDate ? dayjs(profile.birthDate) : null,
    };
    reset(defaultValues);
  }, [profile?.address, profile?.birthDate, profile?.email, profile?.firstName, profile?.lastName, profile?.phoneNumber, reset]);
  const beforeOnSubmitProfile = async (data: IFormCheckout) => {
    return await onSubmitProfile(data, profile, token).then((res) => {
      callAlert("Xác nhận thông tin thành công");
    });
  };
  useEffect(() => {
    getProfile(token, setToken);
  }, [setToken, token]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(beforeOnSubmitProfile)}>
        <div className="step mt-8 ">
          {/* thông tin đặt thuê */}
          <div className="card ">
            <h3 className="">Thông tin cá nhân</h3>
            <InfoRent isProfile />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UserProfilePage;
