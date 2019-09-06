- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components allow you to set state and pass that state around to other components via props.

It's still useful to learn about class components because a lot of legacy code is written using class components and companies may be slow to transition due to the cost of refactoring.

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount() -- called once after the render method during the mounting phase. Useful for performing actions like fetching data from an API to set some initial state with data that needs to be displayed when the page first loads.

2. componentDidUpdate() -- called every time the props or state changes and after a re-render of the component. Useful for changing data being displayed based on user interaction.

3. componentWillUnmount() -- called right before the component is unmounted from the DOM. Useful for cleanup, such as canceling network requests, timers, or subscriptions created in componentDidMount().

- [ ] What is the purpose of a custom hook?

 Allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. 

- [ ] Why is it important to test our apps?

It minimizes the appearane of bugs in our code and forces us to think about edge cases while writing code which results in better, more testable code.

