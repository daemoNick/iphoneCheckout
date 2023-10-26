import React, { useState, useRef } from "react";

function MyBox(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={props.size} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        wireframe={hovered}
      />
    </mesh>
  );
}

export default MyBox;
