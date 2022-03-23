import Filter from "../components/Filter";

export default {
    title: "Filter",
    component: Filter,
    argTypes: { filter: { action: "filter by" } }
}

const Template = (args) => <Filter {...args} />

export const FilterTypeA = Template.bind({})

FilterTypeA.args = {
    options: ["A", "B", "C"]
}
export const FilterTypeB = Template.bind({})

FilterTypeB.args = {
    options: ["London", "Paris", "Tokyo", "Istanbul", "New York"]
}