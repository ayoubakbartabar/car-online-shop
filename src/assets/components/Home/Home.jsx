import React from "react";
import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import AboutCompony from "../AboutCompony/AboutCompony";
import TopProduct from "../TopProduct/TopProduct";
import SocialMedia from "../SocialMedia/SocialMedia";
import CarCollection from "../CarCollection/CarCollection";
import Discount from "../Discount/Discount";
import SpecialProduct from "../SpecialProduct/SpecialProduct";
import OtherCompany from "../OtherCompany/OtherCompany";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SignUp />
      <AboutCompony />
      <TopProduct />
      <SocialMedia />
      <CarCollection />
      <Discount />
      <SpecialProduct />
      <OtherCompany />
      <Footer />
    </>
  );
}
