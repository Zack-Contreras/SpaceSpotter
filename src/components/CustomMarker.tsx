function CustomMarker() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <circle cx="50" cy="50" r="30" fill="#FFF" opacity="0.5" />
      <image
        x="25"
        y="25"
        width="50"
        height="50"
        xlinkHref="./spacestation.svg"
        fill="white" // Set the fill color to white
      />
    </svg>
  );
}

export default CustomMarker;
