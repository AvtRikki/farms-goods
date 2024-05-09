import React from 'react'
import PrimatyButton from '../../ui/buttons/primary-button'
import { useLocation } from "react-router-dom";
import { AppRoute } from "../../../const";

const Navigation = () => {
  const buttons = [
    {
      to: AppRoute.MAIN,
      button: ( <PrimatyButton minWidth={260} key={AppRoute.MAIN} 
        link={AppRoute.MAIN} text={"Главная"} backgroundColor="transparent" color="black"/>)
    },
    {
      to: AppRoute.BUY,
      button: ( <PrimatyButton minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY} text={"Купить"}/> )
    }
  ];

  const pageUrl = useLocation().pathname;
  return (
    <nav>
    {buttons.filter((button) => button.to !== pageUrl)
      .map((button) => button.button)}
    </nav>
  )
}

export default Navigation