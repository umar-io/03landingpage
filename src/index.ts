import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Card from "./component/Card";
import LandingLayout from "./layout/LandingLayout";
import Hero from "./sections/Hero";
import Container from "./layout/Container";
import Button from "./component/Button";
import SiteFeature from "./sections/SiteFeature"

import {supportIcon, swiftIcon , specialIcon} from "./assets/index"

export {
    NavBar,
    Home,
    Card,
    LandingLayout,
    Hero,
    Container,
    Button,
    SiteFeature,
}

export const siteFeature = [
    {
        id: 1,
        direction: "fade-left",
        featureName: "Swift Delivery",
        icon: swiftIcon,
        text: "At TopUp Access, all of our products and services are supplied immediately and without delay."
    },
    {
        id:2,
        direction: "fade-down",
        featureName: "24/7 Customer Support",
        icon: supportIcon,
        text: "Do you have a question that you'd like to ask? Rest assured that our customer service specialist will provide you with the most appropriate response."
    },
    {
        id: 3,
        direction: "fade-left",
        featureName: "Services at a Low Cost",
        icon: specialIcon,
        text: "By becoming an agent, you can now get a substantial discount on all of our services."
    },
]