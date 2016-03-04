import Link from './Link';
import linkStrategy from './linkStrategy';

const linkPlugin = (config) => ({
  compositeDecorator: {
    strategy: linkStrategy,
    component: (config !== undefined && config.Link !== undefined ? config.Link : Link),
  },
  Link,
});

export default linkPlugin;