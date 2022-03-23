import Metadata from "../components/Metadata";


const parameters = {
    place: "Tokyo",
    start: new Date(),
    end: new Date(),
    type: ["Home", "Internship"],
    details: "Sakura is going to bloom soon"
};

export default {
    title: "Metadata",
    component: Metadata,
    parameters: parameters
}

const Template = (args) => <Metadata {...args} />

export const Example1 = Template.bind({})

Example1.args = {
    ...parameters,
}

export const Example2 = Template.bind({})

Example2.args = {
    ...parameters,
    place: "Paris",
    type: ["Travel"],
    details: "I want to see Eiffel Tower"
}