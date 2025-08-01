In this project, I created a React app that can generate a resume. The sections of the resume split into individual components and are set using the React useState hook. First, each component contains a state variable. This variable is turned into an object. Each property in the object is set using a function passed into the state array. Initial, this object is given default properties. These properties are changed by for each property name, set the new name to be an input value.

The app contains an edit button to edit each property. The initial state of the an isEditing variable is false. When the edit button is clicked, it turns to true. When isEditing is true, the inputs to change each property in the component are display. When it is false, the values from the input are displayed as text. 

The final function that updates the state is handleSubmit(). This makes isEditing become false. 

Live available at: https://project-cv-application-eoo.pages.dev/