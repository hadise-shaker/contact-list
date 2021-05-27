function nameToInitials(name) {
  return name
    .split(" ")
    .slice(0, 3)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

export default nameToInitials;
