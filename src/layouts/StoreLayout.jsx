import Header from "../components/Header/Header";
import CartButton from "../components/CartButton/CartButton";
import { Outlet } from "react-router-dom";

export default function StoreLayout() {
  return (
    <>
      <Header />
      <CartButton />
      <Outlet />
    </>
  );
}