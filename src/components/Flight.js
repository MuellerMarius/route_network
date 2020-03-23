import React from "react";
import PropTypes from "prop-types";
import { Line, Marker } from "react-simple-maps";

export default function Flight(props) {
  return (
    <React.Fragment>
      <Line
        key={props.route.id}
        from={[props.route.fromCoordLong, props.route.fromCoordLat]}
        to={[props.route.toCoordLong, props.route.toCoordLat]}
        // TODO: Stroke color according to category
        stroke={props.themeLight ? "#000000" : "#1A96C8"}
        strokeWidth={1}
      />
      <Marker
        coordinates={[props.route.fromCoordLong, props.route.fromCoordLat]}
      >
        <circle r={2} fill="#F53" />
      </Marker>
      <Marker coordinates={[props.route.toCoordLong, props.route.toCoordLat]}>
        <circle r={2} fill="#F53" />
      </Marker>
    </React.Fragment>
  );
}

Flight.propTypes = {
  route: PropTypes.object.isRequired,
  themeLight: PropTypes.bool
};

Flight.defaultProps = {
  themeLight: false
};
