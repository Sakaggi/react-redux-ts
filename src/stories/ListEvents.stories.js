import { Provider } from "react-redux";
import { store } from '../state/store';
import ListEvents from "../components/ListEvents";

export default {
    title: "ListEvents",
    component: ListEvents,
    argTypes: { filter: { action: "filter by" } }
}

const Template = (args) => <Provider store={store}><ListEvents {...args} /></Provider>

export const List = Template.bind({})

List.args = {
    filterableTypes: ["Home", "Work", "Study", "Internship"]
}
export const ListWithEmptyFilteredValues = Template.bind({})

ListWithEmptyFilteredValues.args = {
    filterableTypes: ["Study", "Travel", "Internship"]
}