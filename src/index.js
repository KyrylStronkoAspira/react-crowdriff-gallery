import React from 'react';

const defaultProps = {
  scriptUrl: 'https://starling.crowdriff.com/js/crowdriff.js',
};

export class CrowdRiffGallery extends React.Component {
  componentDidMount() {
    const { scriptUrl, hash } = this.props;
    // Warn if this script is being used outside of platform without the correct scriptUrl
    if (process.env.NODE_ENV !== 'development' && scriptUrl.indexOf('crowdriff.com') === -1 && window.location.href.indexOf('//platform.') === -1) {
      console.warn('Invalid scriptUrl prop passed to CrowdRiffGallery component.')
    }
    const script = document.createElement('script');

    script.src = scriptUrl;
    script.id = `cr-init__${hash}`;
    script.async = true;
    this.wrapper.appendChild(script);
    if (window.crowdriff__gallery && !window.crowdriff__gallery.interval) {
      window.crowdriff__gallery.interval = setInterval(window.crowdriff__gallery.processQueue, 300);
    }
  }
  componentWillUnmount() {
    window.crowdriff__gallery.rendered = window.crowdriff__gallery.rendered.filter(id => id !== `cr__${this.props.hash}`);
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.allowUpdate) return true;
    return false;
  }
  render() {
    if (!this.props.hash) console.warn('No gallery hash passed to CrowdRiff gallery component')
    return <div ref={c => this.wrapper = c} id={`gallery-wrapper-${this.props.hash}`} />;
  }
}

CrowdRiffGallery.defaultProps = defaultProps;

export default CrowdRiffGallery;