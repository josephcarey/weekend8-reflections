const yell = PassedComponent => ({ children, ...props }) => (
  <PassedComponent {...props}>{children.toUpperCase()}!</PassedComponent>
);
const Title = props => <h1>{props.children}</h1>;
const AngryTitle = yell(Title);

// from:
// https://hackernoon.com/higher-order-components-hocs-for-beginners-25cdcf1f1713

class AngryTitleHOCExample extends Component {
  render() {
    return (
      <div>
        <h2>AngryTitleHOCExample</h2>
        <AngryTitle>Whatever</AngryTitle>
      </div>
    );
  }
}

export default AngryTitleHOCExample;
