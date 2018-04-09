import React from 'react';

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if (this.props.subtitle) {
            return <div className='title-bar__subtitle'>
                <h4>{this.props.subtitle}</h4>
            </div>;
        }
    }

    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {this.renderSubtitle()}
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
}

TitleBar.defaultProps = {
    //title: 'Default Title'
}
