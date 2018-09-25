# CrowdRiff Gallery React Component

## Put a CrowdRiff embed code in a React app!

This lightweight component allows CrowdRiff customers to embed their galleries on websites built in React

### Usage

Import and use

```
import { CrowdRiffGallery } from 'react-crowdriff-gallery'

class App extends Component {
  render() {
    <div>
      <CrowdRiffGallery hash="hash1234" />
    </div>
  }
}
```

|Prop Name   | isRequired  | type  | Description |
|---|---|---|---|
| `hash` | `true` | `string` | 8 or 16 character hash found in the gallery's embed code |

### Finding a gallery hash
The gallery hash is located within the id field of the embed code, prepended by either `cr-init__` or `cr__init-` depending on the version.
```
<script id="cr-init__1234hash" src="https://starling.crowdriff.com/js/crowdriff.js" async></script>
OR
<script id="cr__init-1234hash" src="https://embed.crowdriff.com/js/init?hash=1234hash" async></script>
```


### For dynamic gallery switching
The component handles the embedding of the script onto the page, as well as hooking into the crowdriff__gallery window object that registers and renders gallery objects. As a result, the setup and teardown is in the `componentDidMount` and `componentWillUnmount` lifecycle methods. If you want to dynamically change gallery hashes, set a `key` prop equal to the hash on the component to trigger a new instance of the component.

```
Dynamic gallery example
class DynamicGallery extends Component {
  render() {
    <div>
      <CrowdRiffGallery hash={this.props.hash} key={this.props.hash} />
    </div>
  }
}
```
