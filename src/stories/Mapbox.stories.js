import { Provider } from "react-redux";
import Mapbox from "../components/Mapbox";
import allLifeEvents from "../data";
import { store } from '../state/store';

export default {
    title: "Mapbox",
    component: Mapbox,
    argTypes: { previous: { action: "Go to previous element" }, next: { action: "Go to next element" } }
}

const Template = (args) => <Provider store={store}><Mapbox {...args} /></Provider>

export const Mapbox1 = Template.bind({})

Mapbox1.args = {
    lookAt: allLifeEvents[4]
}