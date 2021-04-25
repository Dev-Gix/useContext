import React from "react";
import reactDom from "react-dom";
import {MainApp} from "./components/MainApp"

const divRoot = document.querySelector("#root");
reactDom.render(<MainApp />,divRoot)