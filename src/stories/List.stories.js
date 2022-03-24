import { Provider } from "react-redux";
import { store } from '../state/store';
import List from "../components/List";

export default {
    title: "List",
    component: List,
}

const Template = () => <Provider store={store}><List /></Provider>

export const ListExample = Template.bind({})



